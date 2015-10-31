import Ember from 'ember';
// import Location from "../models/location";

export default Ember.Component.extend({
  markers: [],
  infoWindows: [],
  activeInfoWindow: null,
  searchResultObjects: [],
  showNewInfowindow: function(infowindowInstance, marker) {
    if (this.get("activeInfoWindow")) {
      this.get("activeInfoWindow").close();
    }
    // if (this.newLocationMarker) {
    //   this.newLocationMarker.setMap(null);
    // }
    // for (var i = 0; i < this.infoWindows.length; i++) {
    //   this.infoWindows[i].close();
    // }

    infowindowInstance.open(this.get("map"), marker);
    window.setTimeout(function() {
      marker.showingInfoWindow = true;
    }, 1000);
    this.set("activeInfoWindow", infowindowInstance);
  },
  actions: {
    showOnMap: function(place) {
      var map = this.get("map");
      // var activeSearchResult = this.get('geo.activeSearchResult');
      if (!place || !place.geometry) {
        return;
      }
      var contentString = '<div id="tmap-infowindow-content" style="padding: 5px;" >' +
        '<h4  class="firstHeading">' + place.name +
        '</h4>' +
        '<small>' + place.vicinity + '</small>' +
        '</div>';

      var infowindowInstance = new google.maps.InfoWindow({
        content: contentString,
        position: place.geometry.location,
        pixelOffset: new google.maps.Size(0, -15),
      });
      infowindowInstance.open(map);
      if (this.get("activeInfoWindow")) {
        this.get("activeInfoWindow").close();
      }
      this.set("activeInfoWindow", infowindowInstance);

      this.get("map").setCenter(place.geometry.location);

      // var mapElementId = "#" + this.get("mapId");
      // $('html, body').animate({
      //   scrollTop: $(mapElementId).offset().top
      // }, 800);

    },
    searchResultSelected: function(searchResultObject) {
      this.sendAction("searchResultSelectedAction", searchResultObject);
      // searchResultObject.set("added", true);
      // // var locationObject = Location.locationFromPlaceSearch(searchResultObject, "");
    },
  },
  onSearchResultsChange: function() {
    var results = this.get("searchResults");
    if (results.length === 0) {
      debugger;
    }

    // var mapElementId = "#" + this.get("mapId");
    // if (results.length > 0) {
    //   this.set("noResultsFound", false);
    //   var mapHeight = $(window).height(); //dividing by 1.5 would be 2/3s so this is just a bit less
    //   $(mapElementId).height(mapHeight);
    //   google.maps.event.trigger(this.get("map"), 'resize');
    // } else {
    //   this.set("noResultsFound", true);
    //   $(mapElementId).height(1);
    // }
    var markers = this.get('markers');

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    var that = this;
    var searchResultIcon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";

    var searchResultObjects = [];
    results.forEach(function(place) {
      var searchResultObject = Ember.Object.create(place);
      searchResultObjects.pushObject(searchResultObject);
      // place.added = true;
      // var icon = {
      //   url: place.icon,
      //   size: new google.maps.Size(71, 71),
      //   origin: new google.maps.Point(0, 0),
      //   anchor: new google.maps.Point(10, 10),
      //   scaledSize: new google.maps.Size(25, 25)
      // };

      // Create a marker for each place.
      // markers.push(new google.maps.Marker({
      //   map: that.get("map"),
      //   icon: icon,
      //   title: place.name,
      //   position: place.geometry.location
      // }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      } else {
        bounds.extend(place.geometry.location);
      }

      var marker = new google.maps.Marker({
        position: place.geometry.location,
        map: that.get("map"),
        title: place.name,
        icon: searchResultIcon,
        // showingInfoWindow: false,
        // location_id: detailsForMarker.location_id
      });
      markers.pushObject(marker);

      // had clases bodyContent and pointer below..
      var contentString = '<div id="tmap-infowindow-content" class="" >' +
        '<h4 class="firstHeading">' + place.name +
        '</h4>' + '<span>' +
        '<div id="">' +
        place.vicinity +
        '</div></span>' +
        '</div>';

      //Need location_id on markers on infowindows to be able to pick them out for highlighting
      var infowindowInstance = new google.maps.InfoWindow({
        content: contentString,
        position: place.geometry.location,
        pixelOffset: new google.maps.Size(0, 5),
        // location_id: detailsForMarker.location_id
      });

      // if (detailsForMarker.location_id === that.get('activeLocationId')) {
      //   infowindowInstance.open(that.map, marker);
      // }
      // only reason I'm pusing into this array is so that I can get to infowindowInstance
      // in 'showOffInfo' method.
      // dec 2014 update - now using the infowindows array as a way to get at it
      // to highlight when activeMarker changes
      that.infoWindows.pushObject(infowindowInstance);


      google.maps.event.addListener(marker, 'mouseover', function() {
        that.showNewInfowindow(infowindowInstance, marker);
      });


      google.maps.event.addListener(marker, 'click', function(event) {
        // need to show infoWindow for 1st click as tablets do not trigger mouseover
        if (marker.showingInfoWindow) {
          // that.placeSelected(event, detailsForMarker);
        } else {
          that.showNewInfowindow(infowindowInstance, marker);
        }
      });

    });
    this.set("searchResultObjects", searchResultObjects);

    this.set("markers", markers);
    that.get("map").fitBounds(bounds);
  }.observes('searchResults'),

  // below ensures that after infoWindow is shown, showingInfoWindow is set
  // so a second click knows to do something else - like redirect to topic...
  // - needed because on a tablet, the first click event is .....


  onMapHolderChange: function() {
    if (this.get("mapHolder.map")) {
      this.set("map", this.get("mapHolder.map"));
      // this.displaySearchBox();
    }
  }.observes('mapHolder', 'mapHolder.map').on("init"),
});
