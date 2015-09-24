import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  direccionPropiedad: DS.attr(),
  zonaDireccion: DS.attr()
  // direccionPropiedad: DS.attr('number'),
  // repos: DS.hasMany('repo')
});