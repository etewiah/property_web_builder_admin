// used in components/tabs-translations/single-tab.hbs
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    startAdding: function() {
      this.set("isAdding", true);
    },
    saveTranslation: function() {
      var newTranslationBatch = this.get("newTranslationBatch");
      this.set("hasErrors", false);
      newTranslationBatch.forEach(function(translation) {
        // debugger;
        if (Ember.isEmpty(translation.i18n_value)) {
          translation.set("errors", ["Please enter a value"]);
          this.set("hasErrors", true);
        } else {
        }
      }.bind(this));
      if (this.get("hasErrors")) {
        return;
      }

      // TODO - save whole batch in one go
      // this.get("translationBatch").forEach(function(translation) {
      //   if (originalValues[translation.locale] !== translation.i18n_value) {
      //     translation.save(function(result){
      //       // if (result.success) {
      //       // }
      //       // debugger;
      //       originalValues[translation.locale] = translation.i18n_value
      //     }.bind(this));
      //   }
      //   this.set("originalValues", originalValues);
      //   this.set("valuesHaveChanged", false);
      // }.bind(this));
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
      var translation = Ember.Object.create({
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
