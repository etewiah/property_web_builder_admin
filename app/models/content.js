import DS from 'ember-data';
// import { translationMacro as t } from "ember-i18n";

export default DS.Model.extend({
  // i18n: Ember.inject.service(),

  // tTipoPropiedad: Ember.computed('i18n.locale', 'tipoPropiedad', function() {
  //   return this.get("i18n").t("propertyTypes." + this.get("tipoPropiedad"));
  // }),
  // idPropiedad: DS.attr(),
  key: DS.attr(),
  rawEn: DS.attr(),
  rawEs: DS.attr(),
});
