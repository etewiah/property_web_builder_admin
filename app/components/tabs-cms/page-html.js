import Ember from 'ember';
// import TabWithForm from "../base/tab-with-form";

export default Ember.Component.extend({
  toggleVisField: function() {
    var toggleVisField = {
      labelText: "Visible on page",
      fieldName: "visibleOnPage"
    };
    toggleVisField.toggleValue = this.get("currentPage.visible");
    return toggleVisField;
  }.property("currentPage"),
  actions: {
    changeVisibility: function(newVal) {
      var currentPage = this.get("currentPage");
      currentPage.set("visible", newVal);
      var self = this;

      function success(result) {}

      function failure(reason) {
        // handle the error
      }
      currentPage.save(success, failure);
    }
  }

});
