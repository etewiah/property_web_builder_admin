// This component is designed to handle the data used by 
// web-content model
// - works with content that has multilingual sections in the 
// form rawEs, rawEn etc
// - interface is simple content area (no html editor)
import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveContentItem: function(contentItem) {
      // updating in the computed property would mean a call with every keystroke
      // updating here seems more efficient
      var titleValue = this.get("titleValue");
      var contentValue = this.get("contentValue");

      var capitalizedLang = this.get("languageSettings").capitalize();
      var rawContent = this.get("contentItem.raw" + capitalizedLang);
      // enclosing in div below ensures $frag.html() call later returns what I want
      var $frag = $("<div>" + rawContent + "</div>");
      $frag.find("h4").text(titleValue);
      $frag.find("p").text(contentValue);
      this.set("contentItem.raw" + capitalizedLang, $frag.html());
      this.sendAction("saveContentItemAction", contentItem);
      // TODO - ensure above is successfull before calling below
      this.set("isEditing", false);
    },
    startEditing: function() {
      this.set("isEditing", true);
    },
    cancelEditing: function() {
      var contentItem = this.get("contentItem");
      contentItem.rollbackAttributes();
      // debugger;
      this.set("contentValue", this.get("contentItem.raw" + this.languageSettings));
      this.set("isEditing", false);
    },
    previewContent: function() {
      debugger;
    }
  },

  // rawContent: Ember.computed('contentItem', {
  //   get(key) {
  //       var capitalizedLang = this.get("languageSettings").capitalize();
  //       // below gets localised raw content
  //       var rawContent = this.get("contentItem.raw" + capitalizedLang);
  //       return rawContent;
  //     },
  //     set(key, value) {
  //       var capitalizedLang = this.get("languageSettings").capitalize();
  //       // this.set("contentItem.rawEn", value);
  //       this.set("contentItem.raw" + capitalizedLang, value);
  //       return value;
  //     }
  // }),

  titleValue: Ember.computed('contentItem', {
    get(key) {
        var capitalizedLang = this.get("languageSettings").capitalize();
        var rawContent = this.get("contentItem.raw" + capitalizedLang);
        var $frag = $("<div>" + rawContent + "</div>");
        var titleValue = $frag.find("h4").text();
        return titleValue;
      },
      // set(key, value) {
      //   debugger;
      //   var capitalizedLang = this.get("languageSettings").capitalize();
      //   var rawContent = this.get("contentItem.raw" + capitalizedLang);
      //   return value;
      // }
  }),
  contentValue: Ember.computed('contentItem', {
    get(key) {
        var capitalizedLang = this.get("languageSettings").capitalize();
        // below gets localised raw content
        var rawContent = this.get("contentItem.raw" + capitalizedLang);
        var $frag = $("<div>" + rawContent + "</div>");
        // below would fail if I happened to have a raw string
        // var $frag = $(rawContent);
        var mainText = $frag.find("p").text();
        // return this.get("contentItem.rawEn");
        return mainText;
      },
      // set(key, value) {
      //   var capitalizedLang = this.get("languageSettings").capitalize();
      //   var rawContent = this.get("contentItem.raw" + capitalizedLang);
      //   return value;
      // }
  }),
  hasChanged: Ember.computed('', {
    get(key) {
      return true;
    }
  }),
  labelSuffixKey: Ember.computed('contentItem', {
    get(key) {
      var capitalizedLang = this.get("languageSettings").capitalize();
      return "webContentLabels.suffix" + capitalizedLang;
    }
  })
});
