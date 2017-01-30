import Ember from 'ember';
import PropertyPhoto from "../../models/property-photo";


export default Ember.Component.extend({
  reactToSortable: function(evt) {
    var orderedPhotoIds = this.sortable.toArray().toString();
    var property = this.get("resourceObject");
    property.orderPropertyPhotos(orderedPhotoIds, function(successResponse) {
    }.bind(this));
  },
  setupSortable: function() {

    var el = document.getElementById('sortable-pics');
    if (el) {
      this.sortable = new Sortable(el, {
        // Changed sorting within list
        onUpdate: this.reactToSortable.bind(this)
      });

    }
    // not entirely sure if I need this:
    // this._super();
  }.on('didInsertElement'),
  situacionLeftInputFields: [],

  actions: {
    addPhotosFromUrls: function(remoteUrls) {
      // TODO - validate remote urls..
      // console.log();
      var property = this.get("resourceObject");
      property.addPhotosFromUrls(remoteUrls, function(successResponse) {
        // this.actions.refreshPhotos(successResponse);
        // note, below is send and not sendAction
        this.send("refreshPhotos", successResponse);
      }.bind(this));

    },
    refreshPhotos: function(response) {
      // console.log();
      var orderedPropertyPhotos = this.get("resourceObject.orderedPropertyPhotos");
      var uploadedPhotos = [];
      response.forEach(function(photo) {
        // console.log(uploadedPhotos);
        uploadedPhotos.push(PropertyPhoto.create(photo));
      }.bind(this));

      orderedPropertyPhotos.pushObjects(uploadedPhotos);
      this.set("resourceObject.orderedPropertyPhotos", orderedPropertyPhotos);
    },
    deletePhoto: function(photo) {
      photo.remove(function(success) {
          var orderedPropertyPhotos = this.get("resourceObject.orderedPropertyPhotos");
          // console.log(photo);
          orderedPropertyPhotos.removeObject(photo);
        }.bind(this),
        function(error) {
          // TODO - handle error
        }.bind(this));
    }
  },

  addPhotoEndpoint: function() {
    var addPhotoEndpoint = "/api/v1/properties/" + this.get("resourceObject.id") + "/photo";
    return addPhotoEndpoint;
  }.property("resourceObject.id"),

  isActive: function() {
    return this.activeTabName.toLowerCase() === "fotos";
  }.property("activeTabName"),

});
