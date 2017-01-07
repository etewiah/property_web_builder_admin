// used in components/tabs-translations/single-tab.hbs
import Ember from 'ember';
// import AdminTranslations from "../../models/admin_translations";

export default Ember.Component.extend({
  i18n: Ember.inject.service(),

  // seems like isVisible controls visibility of component out of the box
  // instead of actually removing an item from translations array when it
  // is deleted, I will cheat and set isVisible to false
  isVisible: true,
  actions: {
    cancelEditing: function() {
      this.set("isEditing", false);
      // this.set("valuesHaveChanged", false);
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
          } else {
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
          translation.set("batch_key", this.get("batchKey"));
          var successCallback = function(result) {
            var i18n = this.get('i18n');
            var newTranslation = {};
            newTranslation[result.i18n_key] = result.i18n_value;
            i18n.addTranslations(result.locale, newTranslation);
            // above is needed to update i18n translations 
            // fetched by translations fetcher service
            originalValues[translation.locale] = translation.i18n_value;
          }.bind(this);
          if (translation.id) {
            translation.save(successCallback);
          } else {
            // adding locale that isn't translated
            // to a bunch of existing translations 
            translation.addLocaleToExisting(successCallback);
          }
        }
        this.set("originalValues", originalValues);
        // this.set("valuesHaveChanged", false);
        this.set("isEditing", false);
      }.bind(this));
    }
  },
  setOriginalValues: function() {
    var originalValues = {};
    this.translationBatch.forEach(function(translation) {
      originalValues[translation.locale] = translation.i18n_value;
    });
    // var supportedLanguages = this.get("languages");
    // supportedLanguages.forEach(function(language) {
    //   var translation = this.translationBatch.findBy("locale", language);
    //   originalValues[language] = translation ? translation.i18n_value : "";
    // }.bind(this));

    this.set("originalValues", originalValues);
  }.on('init'),

  translationLabel: function() {
    var translationLabelItem = this.translationBatch.findBy("locale", this.get("i18n.locale"));
    if (translationLabelItem) {
      return translationLabelItem.i18n_value;
    } else {
      // in unlikely event of no translation in current locale, use the first
      return this.translationBatch[0].i18n_value;
    }
  }.property("translationBatch"),

  currentLocaleTranslation: function() {
    var supportedLanguages = this.get("languages");
    // its possible the current locale (admin) is not among the list of 
    // supportedLanguages for client user interface
    // Below checks for this:
    if (supportedLanguages.includes(this.get("i18n.locale"))) {
      return this.translationBatch.findBy("locale", this.get("i18n.locale"));
    } else {
      return null;
    }
  }.property("translationBatch"),

  alternativeTranslations: function() {
    // have to do below because when a new supported lang is added, results for it
    // may not exist on server but I have to ensure there is an input for it..
    var supportedLanguages = this.get("languages");
    var alternativeTranslations = [];
    var currentLocale = this.get("i18n.locale");
    supportedLanguages.forEach(function(language) {
      if (language !== currentLocale) {
        var translation = this.translationBatch.findBy("locale", language);
        //  || AdminTranslations.create({
        //   locale: language,
        //   i18n_value: ""
        // });
        alternativeTranslations.push(translation);
      }
    }.bind(this));
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
    // this.set("valuesHaveChanged", valuesHaveChanged);
    this.set("isEditing", valuesHaveChanged);
  }),

});
