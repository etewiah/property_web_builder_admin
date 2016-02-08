import DS from 'ember-data';
// import { translationMacro as t } from "ember-i18n";
import ContentPhoto from "../models/content-photo";


export default DS.Model.extend({
  // i18n: Ember.inject.service(),
  addPhotosFromUrls: function(remoteUrls, complete, error) {
    var data = { remote_urls: remoteUrls };
    var self = this;
    var apiUrl = "/api/v1/web_contents/" + this.get("id") + "/photos_from_url";
    return $.ajax(apiUrl, {
      type: 'POST',
      dataType: 'json',
      data: data
    }).then(function(result) {
      // self.set("geo", result);
      if (complete) {
        // self.set('posts', result.posts);
        complete(result);
      }
    }, function(result) {
      if (error) {
        error(result);
      }
    });
  },
  labelKey: Ember.computed('key', {
    get() {
      var suffix = this.get("key") || this.get("tag").replace("-", "");
      return "webContentLabels." + suffix;
    }
  }),
  // tTipoPropiedad: Ember.computed('i18n.locale', 'tipoPropiedad', function() {
  //   return this.get("i18n").t("propertyTypes." + this.get("tipoPropiedad"));
  // }),
  // idPropiedad: DS.attr(),
  key: DS.attr(),
  rawEn: DS.attr(),
  rawEs: DS.attr(),
  tag: DS.attr(),
  contentPhotos: DS.attr({
    dontSerialize: true
    // above works to prevent sending this attr to server
    // cos of serializeAttribute override in serializer 
  }),
  // I need to have above DS.attr to be able to use this below: 
  photoModels: Ember.computed('contentPhotos', function() {
    var contentPhotos = this.get("contentPhotos") || [];
    var photoModels = [];
    contentPhotos.forEach(function(photo) {
      // console.log(photoModels);
      photoModels.push(ContentPhoto.create(photo));
    }.bind(this));
    return photoModels;
  }),
  // below for content like carousel where each item only has 1 photo
  primaryPhotoModel: Ember.computed('contentPhotos', function() {
    var contentPhotos = this.get("contentPhotos") || [];
    return ContentPhoto.create(contentPhotos[0]);
  }),

});

// add_column :contents, :input_type, :string
// add_column :contents, :tag, :string
// add_column :contents, :last_updated_by_user_id, :integer
// add_column :contents, :status, :string
// add_column :contents, :order_position, :integer
// add_column :contents, :target_url, :string
