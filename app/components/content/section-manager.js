import Ember from 'ember';

export default Ember.Component.extend({
  // store: Ember.inject.service('store'),
  sectionActivated: function() {
    return this.get("sectionInView.visible");
  }.property("sectionInView.visible"),
  actions: {
    toggleVisibility: function(sectionInView) {
      sectionInView.set("visible", !this.get("sectionInView.visible"));
      sectionInView.save();
    }
  },
});
