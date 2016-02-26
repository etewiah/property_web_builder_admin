// used in components/tabs-translations/single-tab.hbs
import Ember from 'ember';

export default Ember.Component.extend({
   i18n: Ember.inject.service(),

  // seems like isVisible controls visibility of component out of the box
  // instead of actually removing an item from translations array when it
  // is deleted, I will cheat and set isVisible to false
  isVisible: true,
  actions: {
    cancelEditing: function() {
      this.set("isEditing", false);
      this.set("valuesHaveChanged", false);
      var originalValues = this.get("originalValues");
      this.get("translationBatch").forEach(function(translation) {
        translation.set("i18n_value", originalValues[translation.locale]);
      });
    },
    removeTranslationItem: function() {

      swal({
        title: this.get('i18n').t('alert.deleteItem'),
        // text: "You will not be able to recover this imaginary file!",
        // type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#DD6B55",
        confirmButtonText: this.get('i18n').t('alert.deleteButton'),
        closeOnConfirm: true
      }, function() {
        var firstTranslationInBatch = this.get("translationBatch.firstObject");
        // batch_key is needed server side to be able to remove values from FieldConfig
        firstTranslationInBatch.set("batch_key", this.get("batchKey"));
        firstTranslationInBatch.delete(function(result) {
          if (result.success) {
            this.set("isVisible", false);
          }
          else{
            // TODO - handle failure
          }
        }.bind(this));
      }.bind(this));



    },
    saveTranslation: function() {
      var originalValues = this.get("originalValues");
      // TODO - save whole batch in one go
      this.get("translationBatch").forEach(function(translation) {
        if (originalValues[translation.locale] !== translation.i18n_value) {
          translation.save(function(result) {
            // if (result.success) {
            // }
            originalValues[translation.locale] = translation.i18n_value;
          }.bind(this));
        }
        this.set("originalValues", originalValues);
        this.set("valuesHaveChanged", false);
      }.bind(this));
    }
  },
  setOriginalValues: function() {
    var originalValues = {};
    this.translationBatch.forEach(function(translation) {
      originalValues[translation.locale] = translation.i18n_value;
    });
    this.set("originalValues", originalValues);
    // this.$(".ayuda").tooltip();
  }.on('init'),

  translationLabel: function() {
    // return this.translationBatch[0].i18n_value;
    return this.translationBatch.findBy("locale", this.get("i18n.locale")).i18n_value;
  }.property("translationBatch"),

  currentLocaleTranslation: function() {
    // return this.translationBatch[0].i18n_value;
    return this.translationBatch.findBy("locale", this.get("i18n.locale"));
  }.property("translationBatch"),

  alternativeTranslations: function() {
    // have to do below because when a new supported lang is added, results for it
    // may not exist on server but I have to ensure there is an input for it..
    var languages = this.get("languages");
    var alternativeTranslations = [];
    var currentLocale = this.get("i18n.locale");
    languages.forEach(function(language){
      if (language !== currentLocale) {
        alternativeTranslations.push(this.translationBatch.findBy("locale",language));
      }
    }.bind(this));
    debugger;
    return alternativeTranslations;
    // return this.translationBatch.rejectBy("locale", this.get("i18n.locale"));
  }.property("translationBatch"),

  //  http://blog.abuiles.com/blog/2015/03/30/removing-prototype-extensions-with-ember-watson/
  valueChanged: Ember.observer('translationBatch.@each.i18n_value', 'originalValues.[]', function() {
    var originalValues = this.get("originalValues");
    var valuesHaveChanged = false;
    this.get("translationBatch").forEach(function(translation) {
      if (originalValues[translation.locale] !== translation.i18n_value) {
        valuesHaveChanged = true;
      }
    });
    this.set("valuesHaveChanged", valuesHaveChanged);
    this.set("isEditing", valuesHaveChanged);
  }),

});
