import DS from 'ember-data';

export default DS.Model.extend({
  // i18n: Ember.inject.service(),


  label: DS.attr(),
  slug: DS.attr(),
  fullPath: DS.attr(),
  blocks: DS.attr(),
  tags: DS.attr(),
  categories: DS.attr(),
  locale: DS.attr(),
  contentCache: DS.attr(),
  // below is only used when updating to 
  // retrieve other caches that may have
  // changed - eg, when image is updated 
  // for one locale it should change for all
  updatedCaches: DS.attr()

});

