import DS from 'ember-data';
// import { translationMacro as t } from "ember-i18n";

export default DS.Model.extend({

  removeProperty: function(propertyId, complete, error) {
    var clientId = this.get("id");
    var data = {
      client_id: clientId,
      property_id: propertyId
    };
    var self = this;
    var apiUrl = '/api/v1/properties/unset_owner';
    return $.ajax(apiUrl, {
      type: 'POST',
      dataType: 'json',
      data: data
    }).then(function(result) {
      // self.set("geo", result);
      if (complete) {
        // self.set('posts', result.posts);
        complete(result);
      }
    }, function(result) {
      if (error) {
        error(result);
      }
    });
  },
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
  documentationTypes: DS.attr(),
  nationality: DS.attr(),
  properties: DS.attr({
    dontSerialize: true
  }),
  // lastNames: DS.attr(),
// extras: DS.attr({dontSerialize: true}),

  // attributes :client_title, :first_names, :last_names, :phone_number_primary, :phone_number_other
  // attributes :email, :fax, :skype, :documentation_type, :documentation_id, :nationality

});
