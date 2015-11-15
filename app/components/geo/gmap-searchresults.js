import Ember from 'ember';
// import Location from "../models/location";

export default Ember.Component.extend({
  // allMapMarkers: [],
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
    },
  },
  onSearchResultsChange: function() {
    var results = this.get("searchResults");
    if (results.length === 1) {
      this.sendAction("searchResultSelectedAction", results[0]);
    }
    var allMapMarkers = this.get('geo.allMapMarkers') || [];
    // Clear out the old allMapMarkers.
    allMapMarkers.forEach(function(marker) {
      marker.setMap(null);
    });
    allMapMarkers = [];
    var bounds = new google.maps.LatLngBounds();
    var that = this;
    var searchResultIcon = "http://maps.google.com/mapfiles/ms/icons/blue-dot.png";

    var searchResultObjects = [];
    results.forEach(function(place) {
      that.addMarker(place, searchResultObjects, bounds, searchResultIcon, allMapMarkers);
    });

    this.set("searchResultObjects", searchResultObjects);
    this.set("geo.allMapMarkers", allMapMarkers);
    
    if (results.length > 0) {
      that.get("map").fitBounds(bounds);
    } else {
      // do nothing
    }
  }.observes('searchResults'),


  addMarker: function(place, searchResultObjects, bounds, searchResultIcon, allMapMarkers) {
    var searchResultObject = Ember.Object.create(place);
    searchResultObjects.pushObject(searchResultObject);


    if (place.geometry.viewport) {
      // Only geocodes have viewport.
      bounds.union(place.geometry.viewport);
    } else {
      bounds.extend(place.geometry.location);
    }

    var marker = new google.maps.Marker({
      position: place.geometry.location,
      map: this.get("map"),
      title: place.name,
      icon: searchResultIcon,
      // showingInfoWindow: false,
      // location_id: detailsForMarker.location_id
    });
    allMapMarkers.pushObject(marker);

    // had clases bodyContent and pointer below..
    var contentString = '<div id="tmap-infowindow-content" class="" >' +
      '<h4 class="firstHeading">' + place.name +
      '</h4>' + '<span>' +
      '<div id="">' +
      place.vicinity +
      '</div></span>' +
      '</div>';

    var infowindowInstance = new google.maps.InfoWindow({
      content: contentString,
      position: place.geometry.location,
      pixelOffset: new google.maps.Size(0, 5),
    });

    // only reason I'm pusing into this array is so that I can get to infowindowInstance
    // in 'showOffInfo' method.
    // dec 2014 update - now using the infowindows array as a way to get at it
    // to highlight when activeMarker changes
    this.infoWindows.pushObject(infowindowInstance);


    google.maps.event.addListener(marker, 'mouseover', function() {
      this.showNewInfowindow(infowindowInstance, marker);
    }.bind(this));


    // google.maps.event.addListener(marker, 'click', function(event) {
    //   // need to show infoWindow for 1st click as tablets do not trigger mouseover
    //   if (marker.showingInfoWindow) {
    //     // this.placeSelected(event, detailsForMarker);
    //   } else {
    //     this.showNewInfowindow(infowindowInstance, marker);
    //   }
    // }.bind(this));
  },

  // below ensures that after infoWindow is shown, showingInfoWindow is set
  // so a second click knows to do something else - like redirect to topic...
  // - needed because on a tablet, the first click event is .....


  onMapHolderChange: function() {
    if (this.get("geo.map")) {
      this.set("map", this.get("geo.map"));
      // this.displaySearchBox();
    }
  }.observes('geo', 'geo.map').on("init"),
});
