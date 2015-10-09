import Ember from 'ember';

export default Ember.Component.extend({
  infoWindows: [],
  doubleClicked: false,
  clickEvent: null,

  markers: function() {
    var can_edit = true;
    // Discourse.User.current() && Discourse.User.current().admin;
    var currentMarkerValues = [];
    var places = this.get('geo.places');
    if (places && places.sorted_ids) {
      places.sorted_ids.forEach(function(id) {
        if (!places[id].deleted) {
          var markerInfo = {
            context: 'topic_view',
            location: places[id],
            location_id: String(id),
            can_edit: can_edit
          };
          // currently have some errors in db where duplicates have been saved
          // shouldn't need below once that is fixed
          // if(!currentMarkerValues.findBy('location_id', String(id))){
          currentMarkerValues.push(markerInfo);
          // }
        }
      });
    }
    return currentMarkerValues;
    // locationCount below is not accurate, just a value that increments each time
    // a new reply with a location is added (done in extension to composer model)
  }.property('geo', 'geo.places'),


  // below will trigger when a place box is slected outside of the map
  onActiveLocationIdChange: function() {
    var location_id = this.get('activeLocationId');
    // this.get('activeMarker.location_id');

    for (var i = 0; i < this.infoWindows.length; i++) {
      this.infoWindows[i].close();
    }


    var newActiveInfowindow = this.infoWindows.findBy('location_id', location_id);
    // var markers = this.get('markers');
    // var newActiveMarker = markers.findBy('location_id', location_id);
    // not quite sure but above results in an error 

    // below results in an error too but only when map is offline which I don't care about
    var markers = this.markers || [];
    var newActiveMarker = markers.findBy('location_id', location_id);

    if (newActiveMarker && newActiveInfowindow) {
      newActiveInfowindow.open(this.map, newActiveMarker);
    }

    // could be interesting to use panby here to move selected item to the bottom
    // http://stackoverflow.com/questions/10656743/how-to-offset-the-center-point-in-google-maps-api-v3

  }.observes('activeLocationId'),


  onActiveSearchResultChange: function() {
    var activeSearchResult = this.get('geo.activeSearchResult');
    if (!activeSearchResult || !activeSearchResult.geometry) {
      return;
    }
    if (this.newLocationMarker) {
      this.newLocationMarker.setMap(null);
    }
    this.newLocationMarker = new google.maps.Marker({
      position: activeSearchResult.geometry.location,
      map: this.map,
      title: activeSearchResult.name
    });

    var contentString = '<div id="tmap-infowindow-content" style="padding: 5px;" >' +
      '<h4 id="firstHeading" class="firstHeading">' + activeSearchResult.name +
      '</h4>' +
      '<small>' + activeSearchResult.vicinity + '</small>' +
      '</div>';

    var infowindowInstance = new google.maps.InfoWindow({
      content: contentString,
      // searchResult: activeSearchResult
    });
    infowindowInstance.open(this.map, this.newLocationMarker);

    this.map.setCenter(activeSearchResult.geometry.location);

    // var newActiveInfowindow = this.infoWindows.findBy('location_id', location_id);
    // var newActiveMarker = this.markers.findBy('location_id', location_id);
    // for (var i = 0; i < this.infoWindows.length; i++) {
    //   this.infoWindows[i].close();
    // }
    // // this.infoWindows = [];
    // // this.infoWindows.push(infowindowInstance);
    // if (newActiveMarker && newActiveInfowindow) {
    //   newActiveInfowindow.open(this.map, newActiveMarker);
    // }

  }.observes('geo.activeSearchResult'),

  markerValuesChanged: function() {
    // I probably should do a check along the lines of:
    // this.get('geo.places.sorted_ids.length') !== this.markers.length
    // for re-rendering as I browse
    this.triggerMapAsNeeded();
  }.observes('geo.places'),

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


  renderMap: function() {
    this.$("#interactive-map-canvas").show();
    this.renderMapWithoutMarkers();
    // if (this.get('geo')) {
    //   var currentMarkerValues = this.get('markers');
    //   var markersFound = currentMarkerValues && currentMarkerValues.length > 0;
    //   // if (markersFound && !_mobile_device_) {
    //   // might need to reintroduce logic of detecting _mobile_device_
    //   // this.renderMap(currentMarkerValues);

    //   if (markersFound) {

    //     this.$("#interactive-map-canvas").show();
    //     this.renderMapWithMarkers();
    //   } else {
    //     this.$("#interactive-map-canvas").hide();
    //     this.renderMapWithoutMarkers();
    //   }
    // }

  },

  // highlighted_icon: "http://maps.google.com/mapfiles/ms/icons/red-dot.png",
  topic_icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png",
  post_icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",

  onShowSearchBoxChange: function() {
    if (window.google && this.get('showSearchBox')) {
      this.displaySearchBox();
    }
  }.observes('showSearchBox'),

  displaySearchBox: function() {
    var input = (document.getElementById('tmap-pac-input'));
    if (input && this.get('showSearchBox')) {

      var autocomplete = new google.maps.places.Autocomplete(input);
      autocomplete.bindTo('bounds', this.map);
      // input.focus();

      var that = this;
      google.maps.event.addListener(autocomplete, 'place_changed', function() {

        if (!that.$("#interactive-map-canvas").is(":visible")) {
          // 
          that.$("#interactive-map-canvas").show();
          google.maps.event.trigger(that.map, 'resize');
        }

        // infowindow.close();
        // marker.setVisible(false);
        var place = autocomplete.getPlace();
        if (!place.geometry) {
          return;
        }
        if (that.newLocationMarker) {
          that.newLocationMarker.setMap(null);
        }


        that.newLocationMarker = new google.maps.Marker({
          position: place.geometry.location,
          map: that.map,
          title: place.name
            // icon: icon
            // address: place.title
        });

        var contentString = '<div id="tmap-infowindow-content" style="padding: 5px;" >' +
          '<h4 id="firstHeading" class="firstHeading">' + place.name +
          '</h4>' +
          '<small>' + place.vicinity + '</small>' +

          '</div>';

        var infowindowInstance = new google.maps.InfoWindow({
          content: contentString,
          searchResult: place
        });
        infowindowInstance.open(that.map, that.newLocationMarker);

        that.map.setCenter(place.geometry.location);
        google.maps.event.addListenerOnce(that.map, 'bounds_changed', function(event) {
          if (this.getZoom() > 15) {
            this.setZoom(15);
          }
        });

        var geo = that.get('geo');
        var wrappedSearchResult = {
          'searchResult': infowindowInstance.searchResult,
          map: that.map,
          geo: geo
        };


        // placeChosen in topic_route
        that.sendAction('searchClickedAction', wrappedSearchResult)

      });
    }
  },

  // below ensures that after infoWindow is shown, showingInfoWindow is set
  // so a second click knows to do something else - like redirect to topic...
  // - needed because on a tablet, the first click event is .....
  showNewInfowindow: function(infowindowInstance, marker) {
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

  renderMapWithoutMarkers: function() {
    var geoDetails = this.get('geo');
    var mapCenter = new google.maps.LatLng(geoDetails.latitude, geoDetails.longitude);

    this.mapOptions.center = mapCenter;
    this.mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;

    this.$("#interactive-map-canvas").css("min-height", "400px");
    this.map = new google.maps.Map(document.getElementById(
        'interactive-map-canvas'),
      this.mapOptions);

    // below makes the map available outside this component
    this.set('geo.map', this.map);

    var that = this;
    google.maps.event.addListener(this.map, 'click', function(event) {
      that.mapClicked(event.latLng.lat(), event.latLng.lng());
    });
    if (geoDetails && geoDetails.bounds_value) {
      var bounds = new google.maps.LatLngBounds();
      try {
        var boundsJSON = JSON.parse(geoDetails.bounds_value);
        // sometimes bounds_value is not valid - just swallow the error in that case
        var neLatlng = new google.maps.LatLng(boundsJSON[0][0], boundsJSON[0][1]);
        var swLatlng = new google.maps.LatLng(boundsJSON[1][0], boundsJSON[1][1]);
        bounds.extend(neLatlng);
        bounds.extend(swLatlng);
        this.map.fitBounds(bounds);
        google.maps.event.addListenerOnce(this.map, 'bounds_changed', function(event) {
          // 
          var newZoom = this.getZoom() + 1;
          this.setZoom(newZoom);
        });

      } catch (e) {
        // TODO - throw to discourse
      }
      // var currentZoom = this.map.getZoom();
      // this.map.setOptions({maxZoom: currentZoom});
      // this.map.setZoom(this.map.getZoom() + 1);
    }
    this.displaySearchBox();
  },

  renderMapWithMarkers: function() {
    var displayContext = this.get('displayContext');
    var currentMarkerValues = this.get('markers');
    // var mapCenter = new google.maps.LatLng(currentMarkerValues[0].latitude,
    //   currentMarkerValues[0].longitude);
    var geoDetails = this.get('geo');

    var mapCenter = new google.maps.LatLng(geoDetails.latitude, geoDetails.longitude);
    this.mapOptions.center = mapCenter;
    this.mapOptions.mapTypeId = google.maps.MapTypeId.ROADMAP;
    this.map = new google.maps.Map(document.getElementById(
        'interactive-map-canvas'),
      this.mapOptions);

    // below makes the map available outside this component
    // this is useful when I need to do google place searches - 
    // eg in place-research modal (passed through in showPlaceResearchModal method)
    // perhaps will get rid of this.map and always use geo.map...
    this.set('geo.map', this.map);

    // aug 2015 - now seting map on the meetdown model directly - more versitile
    //  1st real life use is for ..../places/details  route
    this.set('mapHolder.map', this.map);


    var bounds = new google.maps.LatLngBounds();
    // TODO - ensure I have unique markers where location is same
    this.infoWindows = [];
    this.markers = [];
    var that = this;
    $.each(currentMarkerValues, function(index, detailsForMarker) {
      var addressString = "";
      var icon = that.topic_icon;
      addressString = detailsForMarker.location.address;
      var title = detailsForMarker.location.title;


      var myLatlng = new google.maps.LatLng(detailsForMarker.location.latitude, detailsForMarker.location.longitude);
      // (52.519171, 13.4060912);
      // latlngbounds.extend(latLng);
      bounds.extend(myLatlng);
      var marker = new google.maps.Marker({
        position: myLatlng,
        map: that.map,
        title: title,
        icon: icon,
        showingInfoWindow: false,
        location_id: detailsForMarker.location_id
          // address: detailsForMarker.title
      });
      that.markers.pushObject(marker);

      var contentString = '<div id="tmap-infowindow-content" class="pointer" >' +
        '<h4 id="firstHeading">' + title +
        '</h4>' + '<a>' +
        '<div id="bodyContent">' +
        addressString +
        '</div></a>' +
        '</div>';

      //Need location_id on markers on infowindows to be able to pick them out for highlighting
      var infowindowInstance = new google.maps.InfoWindow({
        content: contentString,
        location_id: detailsForMarker.location_id
          // dataObject: dataObject, 
          // dataObjectType: dataObjectType

      });

      if (detailsForMarker.location_id === that.get('activeLocationId')) {
        infowindowInstance.open(that.map, marker);
      }
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
          that.placeSelected(event, detailsForMarker);
        } else {
          that.showNewInfowindow(infowindowInstance, marker);
        }
      });

      google.maps.event.addListener(infowindowInstance, 'domready', function() {
        // ensure document.getElementById("tmap-infowindow-content") exists....
        var infWin = document.getElementById("tmap-infowindow-content");
        if (infWin) {
          infWin.addEventListener("click", function(event) {
            event.stopPropagation();
            that.placeSelected(event, detailsForMarker);
          });
        } else {}

      });

    });

    // for indexView, I will not fitBounds in case
    // if (displayContext === 'topicView') {
    if (this.get('markers.length') > 1) {
      this.map.fitBounds(bounds);
    } else {
      // if there is only one marker, set center to be that one
      // this.map.setZoom(zoom);
      // this.map.setCenter(mapCenter);
      // http://stackoverflow.com/questions/4523023/using-setzoom-after-using-fitbounds-with-google-maps-api-v3
      this.map.fitBounds(bounds);
      // seems silly but I really have to do all this to get the zoom looking half decent
      google.maps.event.addListenerOnce(this.map, 'bounds_changed', function(event) {
        if (this.getZoom() > 15) {
          this.setZoom(15);
        }
      });

    }
    // };
    google.maps.event.addListener(this.map, 'click', function(event) {
      that.mapClicked(event.latLng.lat(), event.latLng.lng());
    });
    this.displaySearchBox();
    // google.maps.event.addListenerOnce(this.map, 'idle', function() {
    //   // below highlights a random infowindow:
    //   window.setTimeout(that.showOffInfo.bind(that), 3000);
    // });
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

    geocoder.geocode({
      'latLng': latlng
    }, function(results, status) {
      if (status === google.maps.GeocoderStatus.OK) {
        if (results[0]) {
          if (that.newLocationMarker) {
            that.newLocationMarker.setMap(null);
          }
          that.newLocationMarker = new google.maps.Marker({
            position: latlng,
            map: that.map
          });

          // var talkPrompt = "Select";

          var contentString = '<div id="map-clickedlocation-content" >' +
            '<h4>' +
            results[0].formatted_address +
            '</h4>';
          // '<div id="clickedlocation-div">' +
          // '<button class="btn btn-infowindow btn-primary btn-small" style="margin-bottom:5px" >' +
          // 'Select</button></div>' +
          // '</div>';

          var infowindowForClickedLocation = new google.maps.InfoWindow({
            content: contentString
          });
          // infowindowForClickedLocation.setContent(results[0].formatted_address);
          infowindowForClickedLocation.open(that.map, that.newLocationMarker);

          // if (that.infoWindows) {
          for (var i = 0; i < that.infoWindows.length; i++) {
            that.infoWindows[i].close();
          }
          // }

          // dec 2014 - don't see a good reason to clear infowindows array...
          // that.infoWindows = [];

          that.infoWindows.push(infowindowForClickedLocation);

          var geo = that.get('geo');
          var locationInfo = {
            'clickedLocation': results[0],
            map: that.map,
            geo: geo
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

    // this.get("controller").addEvent(lat, lng);
  },
  placeSelected: function(event, placeDetails) {
    // will call showPlaceDetails in topic_controller
    placeDetails.map = this.map;
    this.sendAction('markerSelectedAction', placeDetails);
  },


});
