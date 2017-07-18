import DS from 'ember-data';

export default DS.Model.extend({
  // represents a Comfy Mex Sofa page
  // - in the context of PWB, it is used
  // to display a section within a page
  // i18n: Ember.inject.service(),
  // title: DS.attr(),
  siteId: DS.attr(),
  layoutId: DS.attr(),
  parentId: DS.attr(),
  // above 3 are needed when creating a new page

  // below identifies group comfy page belongs to
  // and decides which pwb page it goes into
  label: DS.attr(),
  // below is proxy for locale 
  // together with label will uniquely identify a comfy page
  slug: DS.attr(),
  fullPath: DS.attr(),
  blocks: DS.attr(),
  tags: DS.attr(),
  categories: DS.attr(),
  // locale: DS.attr(),

  locale: Ember.computed('slug', function() {
    return this.get("slug");
  }),

  contentCache: DS.attr(),
  // below is only used when updating to 
  // retrieve other caches that may have
  // changed - eg, when image is updated 
  // for one locale it should change for all
  updatedCaches: DS.attr()

});
