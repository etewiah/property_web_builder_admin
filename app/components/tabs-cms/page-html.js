import Ember from 'ember';
// import TabWithForm from "../base/tab-with-form";

export default Ember.Component.extend({
  toggleVisField: function() {
    var toggleVisField = {
      labelText: "Visible on page",
      fieldName: "visibleOnPage"
    };
    toggleVisField.toggleValue = this.get("currentPwbPage.visible");
    return toggleVisField;
  }.property("currentPwbPage"),
  actions: {
    changeVisibility: function(newVal) {
      var currentPwbPage = this.get("currentPwbPage");
      currentPwbPage.set("visible", newVal);
      var self = this;

      function success(result) {}

      function failure(reason) {
        // handle the error
      }
      currentPwbPage.save(success, failure);
    }
  }

});
