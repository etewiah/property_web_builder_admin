import Ember from 'ember';

export default Ember.Component.extend({
  onPropsRetrieved: function(){
    var propsRetrieved = this.get("propsRetrieved");
    if (propsRetrieved) {
      this.set("showPreviewProps", true);
    }
  }.observes("propsRetrieved"),
  actions: {
    ackResult: function() {
      this.set("propsRetrieved", null);
      this.set("showPreviewProps", false);
    },
  }
});
