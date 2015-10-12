import DS from 'ember-data';
// import { translationMacro as t } from "ember-i18n";

export default DS.Model.extend({
  i18n: Ember.inject.service(),
  // name: DS.attr('string'),
  // tTipoPropiedad: t("propertyTypes." + this.get("tipoPropiedad")),

  tTipoPropiedad: Ember.computed('i18n.locale', 'tipoPropiedad', function() {
    return this.get("i18n").t("propertyTypes." + this.get("tipoPropiedad"));
  }),
  // idPropiedad: DS.attr(),
  direccionPropiedad: DS.attr(),
  zonaDireccion: DS.attr(),
  titleEn: DS.attr(),
  titleEs: DS.attr(),
  descriptionEn: DS.attr(),
  descriptionEs: DS.attr(),
  precioAntiguo: DS.attr(),
  precioAlquiler: DS.attr(),
  // idOrigenPropiedad: DS.attr(),
  origenPropiedad: DS.attr(),
  precioTa: DS.attr(),
  precioTm: DS.attr(),
  precioTb: DS.attr(),
  temporadas: DS.attr(),
  numHabitaciones: DS.attr(),
  numBanos: DS.attr(),
  numAseos: DS.attr(),
  numGarajes: DS.attr(),
  mParcela: DS.attr(),
  mConstruidos: DS.attr(),
  eficienciaEnergia: DS.attr(),
  anoConstr: DS.attr(),
  mapaLat: DS.attr(),
  mapaLng: DS.attr(),

  estadoPropiedad: DS.attr(),
  tipoPropiedad: DS.attr(),
  localidad: DS.attr(),
  precioVenta: DS.attr(),
  destacado: DS.attr(),
  archivado: DS.attr(),
  visible: DS.attr(),
  codigoPostal: DS.attr(),
  idealista: DS.attr(),
  yaencontre: DS.attr(),
  pisoscom: DS.attr(),

      // t.string :origen_propiedad
      // t.string :estado_propiedad
      // t.string :tipo_propiedad
      // t.string :localidad
      // t.float :precio_venta
      // t.boolean :destacado
      // t.boolean :archivado
      // t.boolean :visible


  //   mapa-lat: 39.5160831,
  // mapa-lng: -0.416378,
  // direccion-fisica: "",
  // cp: "",
  // ano-constr: 0,
  // num-habitaciones: true,
  // num-banos: true,
  // num-aseos: "",
  // m-parcela: 0,
  // m-construidos: 110,
  // num-garajes: true,
  // mapa-zoom: true,
  // pano-yaw: 0,
  // pano-pitch: 0,
  // pano-zoom: true,
  // comision: 0,
  // cuota-comunidad: 0,
  // valor-catastral: 0,
  // ref-catastral: "",
  // valor-tasacion: 0,
  // escrituras: false,
  // hipoteca: false,
  // llaves: false,
  // llaves-situacion: "",
  // observaciones-venta: "",
  // video: "",
  // precio-antiguo: 0,
  // precio-alquiler: 0,
  // temporadas: false,
  // precio-ta: 0,
  // precio-tm: 0,
  // precio-tb: 0,
  // id-etiqueta: false,
  // extras: "15,31,55,43,50",
  // id-origen-propiedad: 1,
  // url-eficiencia: "",
  // eficiencia-energia: "1",
  // yaencontre: false,
  // idealista: false,
  // pisoscom: true,
  // direccionPropiedad: DS.attr('number'),
  // repos: DS.hasMany('repo')
});
