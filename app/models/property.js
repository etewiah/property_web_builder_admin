import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),

  idPropiedad: DS.attr(),
  direccionPropiedad: DS.attr(),
  zonaDireccion: DS.attr(),
  titleEn: DS.attr(),
  titleEs: DS.attr(),
  descriptionEn: DS.attr(),
  descriptionEs: DS.attr()
    // direccionPropiedad: DS.attr('number'),
    // repos: DS.hasMany('repo')
});
