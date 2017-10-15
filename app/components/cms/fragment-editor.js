import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    savePageFragment: function() {
      var pwbPage = this.get("pwbPage");
      // this.set("currentLocaleFragment.locale", this.get("locale"));
      var boundValues = this.get("boundValues");

      var that = this;

      function success(result) {
        console.log(that);
        that.set("fragmentHtml.raw", result.html);
      }

      function failure(reason) {
        // handle the error
      }
      pwbPage.saveFragment(boundValues, success, failure);

      this.set("isEditing", false);
    },
    cancelEditing: function() {
      this.set("isEditing", false);
    },
  },
  // setupComponent: function() {

  // }.on('didInsertElement'),
  colClass: Ember.computed('blocksInfo', {
    get(key) {
      var blocksInfo = this.get("blocksInfo") || [];
      if (blocksInfo.length === 2) {
        return "col-sm-6";
      }
      if (blocksInfo.length === 3) {
        return "col-sm-4";
      }
      if (blocksInfo.length === 4) {
        return "col-sm-3";
      }
      return "col-sm-12";
    }
  }),
  boundValues: Ember.computed('blocksInfo', {
    get(key) {
      var locale = this.get("locale");
      var blockContents = this.get("currentPagePart.block_contents");
      var currentLocaleBlockContents = blockContents[locale] || {blocks: {}};
      // var currentLocaleBlockContents = this.get("currentLocaleBlockContents");
      // if (!currentLocaleBlockContents.blocks) {
      //   currentLocaleBlockContents.blocks = {};
      // }
      currentLocaleBlockContents.page_part_key = this.get("currentPagePart.page_part_key");
      currentLocaleBlockContents.locale = locale;
      return Ember.Object.create(
        currentLocaleBlockContents
      );
    }
  })
});
