import Ember from 'ember';
import AdminMeta from '../../../models/admin_meta';

export default Ember.Route.extend({
  actions: {
    // editProperty(property) {
    //   this.transitionTo("admin.propiedades.editar", property.get('idPropiedad'))
    // }
  },

  model(params) {
    // Model returned here is a set of localised key value pairs
    // that can be used to populate "dynamic-select" input fields
    var fieldNames = "property-origins, property-types, property-states, property-labels";


    var adminMeta = AdminMeta.get(fieldNames);
    // adminMeta is from http://localhost:3000/api/v1/lang/field_keys/
    // and just returns a list of selectValues for provinces and propertyTypes..
    return adminMeta;
  },

  // model(params) {
  //   return this.store.createRecord('property');
  // },

  setupController(controller, model) {
    controller.set("model", this.store.createRecord("property"));
    controller.set("fieldKeys", model);
  }
});
