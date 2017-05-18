// This component is based on the
// landing page 3-column services section
import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: true,
  actions: {
    saveContentItem: function(contentItem) {
      // debugger;
      contentItem.save();
      // // updating in the computed property would mean a call with every keystroke
      // // updating here seems more efficient
      // var contentValue = this.get("contentValue");

      // var capitalizedLang = this.get("languageSettings").capitalize().split("-")[0];
      // var rawContent = this.get("contentItem.raw" + capitalizedLang);
      // // enclosing in div below ensures $frag.html() call later returns what I want
      // var $frag = $("<div>" + rawContent + "</div>");
      // // $frag.find("p").text(contentValue);
      // // 
      // // var mainTextEl = $frag.find("p");
      // if ($frag.find(".ca-content").html()) {
      //   $frag.find(".ca-content").html(contentValue);
      // } else {
      //   contentValue = "<div class='ca-content'>" + contentValue + "</div>";
      //   $frag.find("p").replaceWith(contentValue);
      // }
      // // var mainText = $frag.find(".ca-content").html() || $frag.find("p").html();
      // // mainTextEl.replaceWith(contentValue);

      // this.set("contentItem.raw" + capitalizedLang, $frag.html());
      // this.sendAction("saveContentItemAction", contentItem);
      // // TODO - ensure above is successfull before calling below
      // this.set("isEditing", false);
      // // below 2 calls ensure that if I return to edit
      // // and then cancel
      // // content will rollback to correct last value
      // this.set("originalContentValue", contentValue);
    },
    startEditing: function() {
      this.set("isEditing", true);
    },
    cancelEditing: function() {
      var contentItem = this.get("contentItem");
      contentItem.rollbackAttributes();
      this.set("contentValue", this.get("originalContentValue"));
debugger;
      this.set("isEditing", false);
    },
    previewContent: function() {}
  },
  contentValue: Ember.computed('contentItem', {
    get(key) {
      // var capitalizedLang = this.get("languageSettings").capitalize().split("-")[0];
      // // below gets localised raw content
      // var rawContent = this.get("contentItem.raw" + capitalizedLang);
      // var $frag = $("<div>" + rawContent + "</div>");
      // // below would fail if I happened to have a raw string
      // // var $frag = $(rawContent);
      // // var mainText = $frag.find("p").html();

      // var mainText = $frag.find(".ca-content").html() || $frag.find("p").html();
      // // return this.get("contentItem.rawEn");
      // this.set("originalContentValue", mainText);
      return "mainText";
    },
  }),
  hasChanged: Ember.computed('', {
    get(key) {
      return true;
    }
  }),
  labelSuffixKey: Ember.computed('contentItem', {
    get(key) {
      return "webContentLabels.suffix" + this.get("contentItem.locale").capitalize();
    }
  })
});
