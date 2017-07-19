import Ember from 'ember';
import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend({
  // changedFields: [],

  i18n: Ember.inject.service(),
  actions: {
  },

  pageTitleFields: function() {
    var pageTitleFields = [];
    var shortLocaleCodes = this.get("shortLocaleCodes");
    var i18n = this.get('i18n');
    shortLocaleCodes.forEach(function(locale) {
      var labelText = i18n.t("webContentLabels.suffix" + locale.capitalize()).toString().capitalize();
      var titleField = {
        labelText: labelText,
        fieldType: "simpleInput",
        inputType: "text",
        constraints: {
          inputValue: {}
        }
      }
      titleField.fieldName = "page_title_" + locale;
      pageTitleFields.pushObject(titleField);
    });
    return pageTitleFields;
  }.property("resourceObject"),

  // linkTitleFields: function() {
  //   var linkTitleFields = [];
  //   var shortLocaleCodes = this.get("shortLocaleCodes");
  //   var i18n = this.get('i18n');
  //   shortLocaleCodes.forEach(function(locale) {
  //     // var labelText = i18n.t("fieldLabels.ref");
  //     // labelText += " ("
  //     var labelText = i18n.t("webContentLabels.suffix" + locale.capitalize()).toString().capitalize();
  //     // labelText += ")"

  //     var titleField = {
  //       labelText: labelText,
  //       fieldType: "simpleInput",
  //       inputType: "text",
  //       constraints: {
  //         inputValue: {}
  //       }
  //     }
  //     titleField.fieldName = "link_title_" + locale;
  //     linkTitleFields.pushObject(titleField);
  //   });
  //   return linkTitleFields;
  // }.property()

});
