import Ember from 'ember';
import MlsConnector from "../../models/mls-connector";
import Property from "../../models/property";

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  // classNames: ['form-group', 'fg-float'],
  actions: {
    getMlsData: function() {
      // var propsRetrieved = this.get("propsRetrieved") || [];
      var that = this;
      var mlsProp = MlsConnector.getProperties("", function(result) {
        // var prop = Property.create(result);
        var store = that.get("store");
        var prop = store.createRecord("property", result);
        var propsRetrieved = that.get("propsRetrieved") || [];
        propsRetrieved.addObject(prop);
        that.set("propsRetrieved", propsRetrieved)
      });
    }
  },
  // propsToImport: Ember.computed('propsRetrieved', {
  //   get(key) {
  //     return this.get("propsRetrieved") || [];
  //   },
  //   // set(key, value) {
  //   //   this.set("propsRetrieved", value);
  //   //   return value;
  //   // }
  // }),
});
