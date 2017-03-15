import Ember from 'ember';

export default Ember.Component.extend({
  // store: Ember.inject.service('store'),
  themeChecked: function() {
    var themeName = this.get("websiteDetails.theme_name") || "default";
    return this.get("themeInView.name") === themeName;
  }.property("themeInView.name","websiteDetails.theme_name"),
  actions: {
    changeTheme: function(websiteDetails, themeInView) {
      websiteDetails.set("theme_name",themeInView.name);
      websiteDetails.save();
    }
  },
});
