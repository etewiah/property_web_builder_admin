// - works with content that has multilingual sections in the 
// form rawEs, rawEn etc
// - interface is summernote html editor
import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),

  actions: {
    saveContentItem: function(contentItem) {
      var self = this;
      function success(result) {
        self.set("isEditing", false);
      }
      function failure(reason) {
        // handle the error
        // var errorMessage = "Sorry, there has been an error.";
        // if (error.responseJSON && error.responseJSON.errors) {
        //   errorMessage = error.responseJSON.errors[0];
        // }
        // this.set('serverError', errorMessage);
      }
      contentItem.save(success, failure);
    },
    startEditing: function() {
      this.set("isEditing", true);
    },
    cancelEditing: function() {
      // var contentItem = this.get("contentItem");
      // var contentValueKey = this.get("contentValueKey");
      this.set("contentValue", this.get("originalValue"));
      this.set("isEditing", false);
    },
    // previewContent: function() {
    // }
  },


  contentValue: Ember.computed('contentItem', {
    get(key) {
      var locale = this.get("shortLocaleCode");
      var contentValueKey = "contentItem.raw_html_" + locale;
      var contentValue = this.get(contentValueKey);
      this.set("originalValue", contentValue);
      // this.set("contentValueKey", contentValueKey);
      return contentValue;
    },
    set(key, value) {
      var locale = this.get("shortLocaleCode");
      // this.set("contentItem.rawEn", value);
      this.set("contentItem.raw_html_" + locale, value);
      return value;
    }
  }),
  // hasChanged: Ember.computed('', {
  //   get(key) {
  //       return true;
  //     }
  // }),
  labelSuffixKey: Ember.computed('contentItem', {
    get(key) {
      var capitalizedLocale = this.get("shortLocaleCode").capitalize();
      // var i18n = this.get("i18n");
      // return i18n.t("webContentLabels.suffix" + capitalizedLocale).toString().capitalize();
      return "webContentLabels.suffix" + capitalizedLocale;
    }
  })
});
