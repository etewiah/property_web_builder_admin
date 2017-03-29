import Ember from 'ember';
// import es from "../../locales/es/translations";
// import en from "../../locales/en/translations";

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  showingVisibleProperties: function() {
    return this.get("propertiesStatus") === "visible";
  }.property(),

  actions: {
    importAllProperties: function(properties) {
      var that = this;
      this.set("importAttempted", true);
      properties.forEach(function(property) {
        // TODO - have a counter keeping track of successes and failures..
        property.save().then(function(success) {
          that.set("success", true);
        }, function(error) {
          that.set("error", true);
        });
      });

    },
    ackResult: function(properties) {
      this.set("properties", null);
    },
    cancelImport: function(properties) {
      this.set("properties", null);
    },
  },

});
