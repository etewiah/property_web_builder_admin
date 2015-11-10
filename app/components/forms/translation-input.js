// used in components/tabs-translations/single-tab.hbs
import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveTranslation: function() {
      var originalValues = this.get("originalValues");
      // TODO - save whole batch in one go
      this.get("translationBatch").forEach(function(translation) {
        if (originalValues[translation.locale] !== translation.i18n_value) {
          translation.save(function(result){
            // if (result.success) {
            // }
            // debugger;
            originalValues[translation.locale] = translation.i18n_value
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
    return this.translationBatch[0].i18n_value;
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
  }),

});
