// used in components/tabs-translations/single-tab.hbs
import Ember from 'ember';
import AdminTranslations from "../../models/admin_translations";
export default Ember.Component.extend({
  actions: {
    cancelAdding: function() {
      this.set("isAdding", false);
    },
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

      // var i18nKeyPrefix = this.get("i18nKeyPrefix");
      // have decided to calculate any prefixes serverside
      // plus new items will have custom tenant prefix anyway
      // var i18nKey = i18nKeyPrefix + "." + newTranslationBatch[0].i18n_value.camelize();

      // just picking the first value provided and basing key off of that
      var i18nKey = newTranslationBatch[0].i18n_value.camelize();

      // TODO - save whole batch in one go
      newTranslationBatch.forEach(function(translation) {
        translation.set("i18n_key", i18nKey);

        translation.set("batch_key", this.get("batchKey"));
        translation.create(function(result) {
          // if (result.success) {
          // }
        }.bind(this));
      }.bind(this));
      // TODO - wait till success of creation before adding to Array below:
      this.sendAction("updateTranslationsArrayAction", newTranslationBatch, "add");
      // clean out new translations input:
      this.setNewTranslationBatch();
    }
  },
  onInitAct: function() {
    // debugger;
    this.setNewTranslationBatch();
  }.on('init'),

  setNewTranslationBatch: function() {
    var locales = this.get("locales") || [];
    var newTranslationBatch = [];
    locales.forEach(function(locale) {
      var translation = AdminTranslations.create({
        locale: locale,
        i18n_value: ""
      });
      newTranslationBatch.push(translation);
    });
    this.set("newTranslationBatch", newTranslationBatch);
  },

  // when tabs change, just discard pending new item
  tabChanged: Ember.observer('batchKey', function() {
    // debugger;
    this.setNewTranslationBatch();
    this.set("isAdding", false);
  }),

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
