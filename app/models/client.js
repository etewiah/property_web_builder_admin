import DS from 'ember-data';
// import { translationMacro as t } from "ember-i18n";

export default DS.Model.extend({

  // i18n: Ember.inject.service(),

  firstNames: DS.attr(),
  lastNames: DS.attr(),
  clientTitle: DS.attr(),
  phoneNumberPrimary: DS.attr(),
  phoneNumberOther: DS.attr(),
  email: DS.attr(),
  fax: DS.attr(),
  skype: DS.attr(),
  documentationId: DS.attr(),
  documentationType: DS.attr(),
  nationality: DS.attr(),
  // lastNames: DS.attr(),
// extras: DS.attr({dontSerialize: true}),

  // attributes :client_title, :first_names, :last_names, :phone_number_primary, :phone_number_other
  // attributes :email, :fax, :skype, :documentation_type, :documentation_id, :nationality

});
