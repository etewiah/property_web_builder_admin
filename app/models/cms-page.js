import DS from 'ember-data';

export default DS.Model.extend({
  // i18n: Ember.inject.service(),


  label: DS.attr(),
  slug: DS.attr(),
  fullPath: DS.attr(),
  blocks: DS.attr(),
  tags: DS.attr(),
  categories: DS.attr(),
  locale: DS.attr()
});

