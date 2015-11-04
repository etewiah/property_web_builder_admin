import Ember from 'ember';
var inject = Ember.inject;

export default Ember.Component.extend({
  configFetcher: inject.service(),
  // http://www.programwitherik.com/ember-services-tutorial
  // could also use:
  // othername: Ember.inject.service('configFetcher'),  

  infoWindows: [],
  doubleClicked: false,
  clickEvent: null,

  renderMap: function() {
    this.$("#interactive-map-canvas").show();

    this.mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;
    this.$("#interactive-map-canvas").css("min-height", "400px");
    this.map = new google.maps.Map(document.getElementById(
      'interactive-map-canvas'), this.mapOptions);
    var geoDetails = this.get('geo');
    if (geoDetails && geoDetails.latitude) {
      var propertyLatLng = new google.maps.LatLng(geoDetails.latitude, geoDetails.longitude);
      var allMapMarkers = this.get('geo.allMapMarkers') || [];

      this.addMarker(propertyLatLng, geoDetails.streetAddress, allMapMarkers);
      this.map.setCenter(propertyLatLng);

    } else {
      var defaultBounds = this.get("configFetcher").getConfigForKey("defaultBounds");
      var swArray = defaultBounds.sw.split(',');
      var neArray = defaultBounds.ne.split(',');
      var southWest = new google.maps.LatLng(parseFloat(swArray[0]), parseFloat(swArray[1]));
      var northEast = new google.maps.LatLng(parseFloat(neArray[0]), parseFloat(neArray[1]));

      // var southWest = new google.maps.LatLng(36.56293033928735, -11.776123046875);
      // var northEast = new google.maps.LatLng(43.293499628577926, 4.857177734375);
      var bounds = new google.maps.LatLngBounds(southWest, northEast);
      this.map.fitBounds(bounds);
    }


    // below makes the map available outside this component
    this.set('geo.map', this.map);

    var that = this;
    google.maps.event.addListener(this.map, 'click', function(event) {
      that.mapClicked(event.latLng.lat(), event.latLng.lng());
    });

    google.maps.event.addListener(this.map, 'bounds_changed', function(event) {
      // useful for when I want to figure out bounds for a country..
      // debugger;
      // var newZoom = this.getZoom() + 1;
      // this.setZoom(newZoom);
    });
  },


  // markers: function() {
  //   var can_edit = true;
  //   var currentMarkerValues = [];
  //   var places = this.get('geo.places');
  //   if (places && places.sorted_ids) {
  //     places.sorted_ids.forEach(function(id) {
  //       if (!places[id].deleted) {
  //         var markerInfo = {
  //           context: 'topic_view',
  //           location: places[id],
  //           location_id: String(id),
  //           can_edit: can_edit
  //         };
  //         // currently have some errors in db where duplicates have been saved
  //         // shouldn't need below once that is fixed
  //         // if(!currentMarkerValues.findBy('location_id', String(id))){
  //         currentMarkerValues.push(markerInfo);
  //         // }
  //       }
  //     });
  //   }
  //   return currentMarkerValues;
  //   // locationCount below is not accurate, just a value that increments each time
  //   // a new reply with a location is added (done in extension to composer model)
  // }.property('geo', 'geo.places'),



  didInsertElement: function() {
    this._super();
    this.triggerMapAsNeeded();
  },

  triggerMapAsNeeded: function() {
    if (typeof google === "undefined") {
      var self = this;
      window.map_callback = function() {
        self.renderMap();
      };
      $.getScript('https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false&callback=map_callback&libraries=places');
    } else {
      this.renderMap();
    }

  },


  // renderMap: function() {
  //   this.$("#interactive-map-canvas").show();
  //   this.renderMapWithoutMarkers();
  // },

  // highlighted_icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
  topic_icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
  post_icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",


  // below ensures that after infoWindow is shown, showingInfoWindow is set
  // so a second click knows to do something else - like redirect to topic...
  // - needed because on a tablet, the first click event is .....
  showNewInfowindow: function(infowindowInstance, marker) {
    debugger;
    if (this.newLocationMarker) {
      this.newLocationMarker.setMap(null);
    }
    for (var i = 0; i < this.infoWindows.length; i++) {
      this.infoWindows[i].close();
    }
    // doesn't make sense to clear out infowindows as I won't be able to pick one out to highlight
    // later
    // this.infoWindows = [];
    // this.infoWindows.push(infowindowInstance);
    infowindowInstance.open(this.map, marker);
    window.setTimeout(function() {
      marker.showingInfoWindow = true;
    }, 1000);
  },

  // having min and maxZoom can lead to a shitty experience if someone really wants to add something outside a city
  // in 2 minds about it..
  mapOptions: {
    // maxZoom: 20,
    // minZoom: 9,
    scrollwheel: false,
    zoom: 15,
    // center: mapCenter,
    // mapTypeId: google.maps.MapTypeId.ROADMAP
    styles: [{
      "featureType": "poi",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }]
  },


  // showOffInfo: function() {
  //   if (this.infoWindows.length > 0) {

  //     this.infoWindows[0].open(this.map, this.markers[0]);
  //   }
  // },
  mapClicked: function(lat, lng) {
    var latlng = new google.maps.LatLng(lat, lng);
    var geocoder = new google.maps.Geocoder();
    var that = this;


    var allMapMarkers = this.get('geo.allMapMarkers') || [];

    // Clear out the old markers.
    allMapMarkers.forEach(function(marker) {
      marker.setMap(null);
    });
    allMapMarkers = [];

    geocoder.geocode({
      'latLng': latlng
    }, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          // if (that.newLocationMarker) {
          //   debugger;
          //   that.newLocationMarker.setMap(null);
          // }
          that.addMarker(latlng, results[0].formatted_address, allMapMarkers);
          // allMapMarkers now contains just the one marker
          that.set("geo.allMapMarkers", allMapMarkers);

          var locationInfo = {
            'clickedLocation': results[0],
            map: that.map,
          };
          // for map in topic, below is interestShownInPlace in topic controller
          that.sendAction('mapClickedAction', locationInfo);

        } else {
          // alert("No results found");
        }
      } else {
        // alert("Geocoder failed due to: " + status);
      }
    });

  },

  addMarker: function(latlng, formatted_address, markers) {
    var newMarker = new google.maps.Marker({
      position: latlng,
      map: this.map
    });

    markers.pushObject(newMarker);
    // var talkPrompt = "Select";

    var contentString = '<div id="map-clickedlocation-content" >' +
      '<h4>' +
      formatted_address +
      '</h4>';
    // '<div id="clickedlocation-div">' +
    // '<button class="btn btn-infowindow btn-primary btn-small" style="margin-bottom:5px" >' +
    // 'Select</button></div>' +
    // '</div>';

    var infowindowForClickedLocation = new google.maps.InfoWindow({
      content: contentString
    });
    // infowindowForClickedLocation.setContent(gmapObject.formatted_address);
    infowindowForClickedLocation.open(this.map, newMarker);

    // if (this.infoWindows) {
    for (var i = 0; i < this.infoWindows.length; i++) {
      this.infoWindows[i].close();
    }
    // }

    // dec 2014 - don't see a good reason to clear infowindows array...
    // this.infoWindows = [];

    this.infoWindows.push(infowindowForClickedLocation);

  },

});
