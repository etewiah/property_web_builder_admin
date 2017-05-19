import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    var cmsSections = this.modelFor("admin").setup.get('cmsSections');
    var currentSection = cmsSections.findBy("tabValue", "about-us");
    return currentSection;
  },
  actions: {},
});
