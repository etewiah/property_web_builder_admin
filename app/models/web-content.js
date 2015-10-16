import DS from 'ember-data';
// import { translationMacro as t } from "ember-i18n";

export default DS.Model.extend({
  // i18n: Ember.inject.service(),
  labelKey: Ember.computed('key', {
    get() {
        return "webContentLabels." + this.get("key");
      }
  }),
  // tTipoPropiedad: Ember.computed('i18n.locale', 'tipoPropiedad', function() {
  //   return this.get("i18n").t("propertyTypes." + this.get("tipoPropiedad"));
  // }),
  // idPropiedad: DS.attr(),
  key: DS.attr(),
  rawEn: DS.attr(),
  rawEs: DS.attr(),
  tag: DS.attr()
});

    // add_column :contents, :input_type, :string
    // add_column :contents, :tag, :string
    // add_column :contents, :last_updated_by_user_id, :integer
    // add_column :contents, :status, :string
    // add_column :contents, :order_position, :integer
    // add_column :contents, :target_url, :string