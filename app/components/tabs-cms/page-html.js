import Ember from 'ember';
// import TabWithForm from "../base/tab-with-form";

export default Ember.Component.extend({
  // toggleVisField: function() {
  //   var toggleVisField = {
  //     labelText: "Visible on page",
  //     fieldName: "visibleOnPage"
  //   };
  //   var visiblePageParts = this.get("currentPwbPage.visible_page_parts") || [];
  //   var pagePartVisibility = visiblePageParts.includes("raw_html");
  //   toggleVisField.toggleValue = pagePartVisibility;
  //   return toggleVisField;
  // }.property("currentPwbPage"),
  // actions: {
  //   changeVisibility: function(newVal) {
  //     var currentPwbPage = this.get("currentPwbPage");
  //     var pagePartLabel = "raw_html"
  //     var visiblePageParts = this.get("currentPwbPage.visible_page_parts") || [];

  //     if (newVal) {
  //       // TODO - will want to order this 
  //       visiblePageParts.pushObject(pagePartLabel);
  //     } else {
  //       visiblePageParts.removeObject(pagePartLabel);
  //     }
  //     var self = this;
  //     function success(result) {}
  //     function failure(reason) {
  //       // handle the error
  //     }
  //     currentPwbPage.setPagePartVisibility(visiblePageParts, success, failure);
  //   }
  // }

});
