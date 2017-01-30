// This component only works with specific content in the
// landing page 3-column services section
// - goes through hoops to ensure the content remains in 
// correct h4 and p tags
// - interface is simple content area (no html editor)
import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    saveContentItem: function(contentItem) {
      // updating in the computed property would mean a call with every keystroke
      // updating here seems more efficient
      var titleValue = this.get("titleValue");
      var contentValue = this.get("contentValue");

      var capitalizedLang = this.get("languageSettings").capitalize().split("-")[0];
      var rawContent = this.get("contentItem.raw" + capitalizedLang);
      // enclosing in div below ensures $frag.html() call later returns what I want
      var $frag = $("<div>" + rawContent + "</div>");
      $frag.find("h4").text(titleValue);
      // $frag.find("p").text(contentValue);
      // 
      // var mainTextEl = $frag.find("p");
      if ($frag.find(".ca-content").html()) {
        $frag.find(".ca-content").html(contentValue);
      }
      else{
        contentValue = "<div class='ca-content'>" + contentValue + "</div>";
        $frag.find("p").replaceWith(contentValue);
      }
      // var mainText = $frag.find(".ca-content").html() || $frag.find("p").html();
      // mainTextEl.replaceWith(contentValue);

      this.set("contentItem.raw" + capitalizedLang, $frag.html());
      this.sendAction("saveContentItemAction", contentItem);
      // TODO - ensure above is successfull before calling below
      this.set("isEditing", false);
      // below 2 calls ensure that if I return to edit
      // and then cancel
      // content will rollback to correct last value
      this.set("originalTitleValue", titleValue);
      this.set("originalContentValue", contentValue);
    },
    startEditing: function() {
      this.set("isEditing", true);
    },
    cancelEditing: function() {
      var contentItem = this.get("contentItem");
      contentItem.rollbackAttributes();
      this.set("titleValue",this.get("originalTitleValue"));
      this.set("contentValue",this.get("originalContentValue"));
      // this.set("contentValue", this.get("contentItem.raw" + this.get("languageSettings").capitalize().split("-")[0] ));
      this.set("isEditing", false);
    },
    previewContent: function() {
    }
  },

  // rawContent: Ember.computed('contentItem', {
  //   get(key) {
  //       var capitalizedLang = this.get("languageSettings").capitalize().split("-")[0];
  //       // below gets localised raw content
  //       var rawContent = this.get("contentItem.raw" + capitalizedLang);
  //       return rawContent;
  //     },
  //     set(key, value) {
  //       var capitalizedLang = this.get("languageSettings").capitalize().split("-")[0];
  //       // this.set("contentItem.rawEn", value);
  //       this.set("contentItem.raw" + capitalizedLang, value);
  //       return value;
  //     }
  // }),

  titleValue: Ember.computed('contentItem', {
    get(key) {
        var capitalizedLang = this.get("languageSettings").capitalize().split("-")[0];
        var rawContent = this.get("contentItem.raw" + capitalizedLang);
        var $frag = $("<div>" + rawContent + "</div>");
        var titleValue = $frag.find("h4").text();
        this.set("originalTitleValue", titleValue);
        return titleValue;
      },
      // set(key, value) {
      //   var capitalizedLang = this.get("languageSettings").capitalize().split("-")[0];
      //   var rawContent = this.get("contentItem.raw" + capitalizedLang);
      //   return value;
      // }
  }),
  contentValue: Ember.computed('contentItem', {
    get(key) {
        var capitalizedLang = this.get("languageSettings").capitalize().split("-")[0];
        // below gets localised raw content
        var rawContent = this.get("contentItem.raw" + capitalizedLang);
        var $frag = $("<div>" + rawContent + "</div>");
        // below would fail if I happened to have a raw string
        // var $frag = $(rawContent);
        // var mainText = $frag.find("p").html();

        var mainText = $frag.find(".ca-content").html() || $frag.find("p").html();
        // return this.get("contentItem.rawEn");
        this.set("originalContentValue", mainText);
        return mainText;
      },
      // set(key, value) {
      //   var capitalizedLang = this.get("languageSettings").capitalize().split("-")[0];
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
      var capitalizedLang = this.get("languageSettings").capitalize().split("-")[0];
      return "webContentLabels.suffix" + capitalizedLang;
    }
  })
});
