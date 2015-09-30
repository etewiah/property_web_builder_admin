import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  idPropiedad: DS.attr(),
  direccionPropiedad: DS.attr(),
  zonaDireccion: DS.attr(),
  titleEn: DS.attr()
    // direccionPropiedad: DS.attr('number'),
    // repos: DS.hasMany('repo')
});
