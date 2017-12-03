import Ember from 'ember';
import MlsConnector from "../../models/mls-connector";

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  showingVisibleProperties: function() {
    return this.get("propertiesStatus") === "visible";
  }.property(),

  actions: {
    importAllProperties: function(properties) {
      var that = this;
      this.set("importing", true);

      // MlsConnector below will also be called to create 
      // props from csv import etc...

      // properties.forEach(function(property) {
      //   ['unknown_fields', 'strange_key_1'].forEach(function(k) {
      //     delete property[k];
      //   });
      // });

      MlsConnector.createProperties(properties,
        function(result) {
          that.set("importAttempted", true);
          that.set("importing", false);
          that.set("importedItems", result);
          that.set("success", true);
        },
        function(error) {
          that.set("importAttempted", true);
          that.set("importing", false);
          that.set("error", true);
        });

      // properties.forEach(function(property) {
      // property.save().then(function(success) {
      //   that.set("success", true);
      // }, function(error) {
      //   that.set("error", true);
      // });
      // });

    },
    ackResult: function(properties) {
      this.set("properties", null);
      this.set("showPreviewProps", false);
    },
    cancelImport: function(properties) {
      this.set("importing", false);
      this.set("properties", null);
      this.set("showPreviewProps", false);
    },
  },

});
