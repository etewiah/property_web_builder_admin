import Ember from 'ember';
// import OnReadyMixin from "../../mixins/on-ready";
// all this just so the bs popover works..
// export default Ember.Component.extend(OnReadyMixin, {
export default Ember.Component.extend({
  // !!!!!july 2016 - can't for the life of me get properties to refresh when route changes
  // exportUrl: function() {
  //   if (location.hostname === "localhost") {
  //     return "http://localhost:3000/export/properties";
  //   } else {
  //     return "/export/properties"
  //   }
  // }.property(),

  actions: {
    // hideProperty: function(property) {
    //   property.set("visible", false);
    //   property.save().then(
    //     function(result) {
    //       var datatableApi = $('.datatables').dataTable().api();
    //       datatableApi.row("#" + result.get("id")).remove().draw();
    //     }.bind(this));
    // },
    unHideProperty: function(property) {
    }
  },

});
