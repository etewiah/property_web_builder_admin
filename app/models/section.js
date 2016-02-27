import DS from 'ember-data';

export default DS.Model.extend({

  linkPath: DS.attr(),
  linkKey: DS.attr(),
  visible: DS.attr(),
  sortOrder: DS.attr(),
  // below for content like carousel where each item only has 1 photo
  primaryPhotoModel: Ember.computed('contentPhotos', function() {
    var contentPhotos = this.get("contentPhotos") || [];
    return ContentPhoto.create(contentPhotos[0]);
  }),

});

