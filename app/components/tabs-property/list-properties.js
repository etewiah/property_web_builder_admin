import Ember from 'ember';

import OnReadyMixin from "../../mixins/on-ready";
// all this just so the bs popover works..
export default Ember.Component.extend(OnReadyMixin, {

  actions: {
    hideProperty: function(property) {
      property.set("visible", false);
      // this.set("properties", []);
      // this.rerender();
      property.save().then(
        function(result) {
          var datatableApi = $('.datatables').dataTable().api();
          datatableApi.row("#" + result.get("id")).remove().draw();

          // var properties = this.get("properties");
          // properties.popObject(result);
          // var changeCount = this.get("changeCount");
          // this.set("changeCount", changeCount + 1);
        }.bind(this));
    },
    unHideProperty: function(property) {
      // property.set("visible", true);
      //     this.set("properties", []);
      // property.save().then(
      //   function(result){
      //     var changeCount = this.get("changeCount");
      //     this.set("changeCount", changeCount + 1);
      //     // debugger;
      //   }.bind(this));
    }
  },

});
