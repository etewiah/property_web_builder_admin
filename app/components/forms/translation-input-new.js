// used in components/tabs-translations/single-tab.hbs
import Ember from 'ember';
import AdminTranslations from "../../models/admin_translations";
export default Ember.Component.extend({
  actions: {
    startAdding: function() {
      this.set("isAdding", true);
    },
    createTranslationBatch: function() {
      var newTranslationBatch = this.get("newTranslationBatch");
      this.set("hasErrors", false);
      newTranslationBatch.forEach(function(translation) {
        // debugger;
        if (Ember.isEmpty(translation.i18n_value)) {
          translation.set("errors", ["Please enter a value"]);
          this.set("hasErrors", true);
        } else {}
      }.bind(this));
      if (this.get("hasErrors")) {
        return;
      }
      var i18nKeyPrefix = "propertyOrigin.";
      var i18nKey = i18nKeyPrefix + newTranslationBatch[0].i18n_value.toLowerCase();
      // TODO - save whole batch in one go
      newTranslationBatch.forEach(function(translation) {
        translation.set("i18n_key", i18nKey);
        translation.create(function(result) {
          // if (result.success) {
          // }
        }.bind(this));
      }.bind(this));
    }
  },
  // setOriginalValues: function() {
  //   var originalValues = {};
  //   this.locales.forEach(function(locale) {
  //     originalValues[locale] = "";
  //   });
  //   this.set("originalValues", originalValues);
  //   debugger;
  //   // this.$(".ayuda").tooltip();
  // }.on('didInsertElement'),

  newTranslationBatch: function() {
    var locales = this.get("locales") || [];
    var newTranslationBatch = [];
    locales.forEach(function(locale) {
      var translation = AdminTranslations.create({
        locale: locale,
        i18n_value: ""
      });
      newTranslationBatch.push(translation);
    });
    return newTranslationBatch;
  }.property("locales"),


  // //  http://blog.abuiles.com/blog/2015/03/30/removing-prototype-extensions-with-ember-watson/
  // valueChanged: Ember.observer('translationBatch.@each.i18n_value', 'originalValues.[]', function() {
  //   var originalValues = this.get("originalValues");
  //   var valuesHaveChanged = false;
  //   this.get("translationBatch").forEach(function(translation) {
  //     if (originalValues[translation.locale] !== translation.i18n_value) {
  //       valuesHaveChanged = true;
  //     }
  //   });
  //   this.set("valuesHaveChanged", valuesHaveChanged);
  // }),

});
