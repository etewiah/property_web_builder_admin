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
        // var fragmentHtml = this.get("fragmentHtml");
        that.set("fragmentHtml.content", result.html);
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
      if (blocksInfo.length === 3) {
        return "col-sm-4";
      }
      if (blocksInfo.length === 4) {
        return "col-sm-3";
      }
      return "col-sm-6";
    }
  }),
  boundValues: Ember.computed('blocksInfo', {
    get(key) {
      var currentLocaleFragment = this.get("currentLocaleFragment");
      if (!currentLocaleFragment.blocks) {
        currentLocaleFragment.blocks = {};
      }
      return Ember.Object.create(
        currentLocaleFragment
      );
    }
  })
});
