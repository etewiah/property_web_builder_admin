import Ember from 'ember';
import MlsConnector from "../../models/mls-connector";

export default Ember.Component.extend({
  // classNames: ['form-group', 'fg-float'],
  actions: {
    getMlsData: function() {
      // var propsRetrieved = this.get("propsRetrieved") || [];
      var that = this;
      var mlsProp = MlsConnector.getProperties("", function(result) {
        var prop = MlsConnector.create(result);
        var propsRetrieved = that.get("propsRetrieved") || [];
        propsRetrieved.push(prop);
        that.set("propsRetrieved", propsRetrieved)
      });
      // debugger;
      // propsRetrieved.push(mlsProp);
      // this.set("propsRetrieved", propsRetrieved);
    }
  },
  // propsToImport: [{
  //   "reference": "10358521629",
  //   "ForSale": "1"
  // }],
  propsToImport: Ember.computed('propsRetrieved', {
    get(key) {
      return this.get("propsRetrieved") || [];
    },
    // set(key, value) {
    //   this.set("propsRetrieved", value);
    //   return value;
    // }
  }),
});
