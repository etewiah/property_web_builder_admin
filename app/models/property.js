import DS from 'ember-data';
// import { translationMacro as t } from "ember-i18n";
import PropertyPhoto from "../models/property-photo";

export default DS.Model.extend({
  addPhotosFromUrls: function(remoteUrls, complete, error) {
    var data = {
      remote_urls: remoteUrls
    };
    var self = this;
    var apiUrl = "/api/v1/properties/" + this.get("id") + "/photo_from_url";
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
  updateExtras: function(complete, error) {
    var data = {};
    data = this.getProperties("extras", "id");
    // this.getProperties( Object.keys(this) );
    var self = this;
    var apiUrl = '/api/v1/properties/update_extras';
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
  setOwner: function(clientId, complete, error) {
    var propertyId = this.get("id");
    var data = {
      client_id: clientId,
      property_id: propertyId
    };
    var self = this;
    var apiUrl = '/api/v1/properties/set_owner';
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
  i18n: Ember.inject.service(),

  // might be better to do translation of title on the server
  tTitle: Ember.computed('i18n.locale', function() {
    var titleLocalisedProp = "title" + this.get("i18n.locale").capitalize();
    return this.get(titleLocalisedProp);
  }),
  // name: DS.attr('string'),
  // tTipoPropiedad: t("propertyTypes." + this.get("tipoPropiedad")),

  // 19 nov 2015 - not entirely sure I want to carry on with this:
  tTipoPropiedad: Ember.computed('i18n.locale', 'tipoPropiedad', function() {
    return this.get("i18n").t(this.get("tipoPropiedad"));
  }),


  propertyPhotos: DS.hasMany('property-photo', {
    async: false
  }),
  // can't quite figure out how to use the relationship above so using 
  // below which is just a raw array
  photos: DS.attr({
    dontSerialize: true
  }),
  photoModels: Ember.computed('photos', function() {
    var photos = this.get("photos");
    var photoModels = [];
    photos.forEach(function(photo) {
      // console.log(photoModels);
      photoModels.push(PropertyPhoto.create(photo));
    }.bind(this));
    return photoModels;
  }),

  owner: DS.attr({
    dontSerialize: true
  }),
  extras: DS.attr({
    dontSerialize: true
      // above works to prevent sending this attr to server
      // cos of serializeAttribute override in serializer 
  }),


  titleEn: DS.attr(),
  titleEs: DS.attr(),
  descriptionEn: DS.attr(),
  descriptionEs: DS.attr(),

  streetAddress: DS.attr(),
  streetNumber: DS.attr(),
  postalCode: DS.attr(),
  locality: DS.attr(),
  zone: DS.attr(),
  city: DS.attr(),
  region: DS.attr(),
  country: DS.attr(),
  longitude: DS.attr(),
  latitude: DS.attr(),
  // showExactAddress: DS.attr(),
  obscureMap: DS.attr(),
  hideMap: DS.attr(),

  // direccionPropiedad: DS.attr(),
  // direccionFisica: DS.attr(),
  // zonaDireccion: DS.attr(),



  forSale: DS.attr(),
  forRentShortTerm: DS.attr(),
  forRentLongTerm: DS.attr(),
  

  saleDiscount: DS.attr(),
  longTermRental: DS.attr(),
  longTermRentalDiscount: DS.attr(),

  priceSaleCurrentCents: DS.attr("currency", { defaultValue: 0 }),
  priceSaleOriginalCents: DS.attr("currency", { defaultValue: 0 }),
  priceRentalMonthlyCurrentCents: DS.attr("currency", { defaultValue: 0 }),
  priceRentalMonthlyOriginalCents: DS.attr("currency", { defaultValue: 0 }),
  priceRentalMonthlyLowSeasonCents: DS.attr("currency", { defaultValue: 0 }),
  priceRentalMonthlyHighSeasonCents: DS.attr("currency", { defaultValue: 0 }),
  priceRentalMonthlyStandardSeasonCents: DS.attr("currency", { defaultValue: 0 }),


  // precioAntiguo: DS.attr(),
  // precioAlquiler: DS.attr(),
  // // idOrigenPropiedad: DS.attr(),
  // precioTa: DS.attr(),
  // precioTm: DS.attr(),
  // precioTb: DS.attr(),
  // temporadas: DS.attr(),


  origenPropiedad: DS.attr(),

  numHabitaciones: DS.attr(),
  numBanos: DS.attr(),
  numAseos: DS.attr(),
  numGarajes: DS.attr(),
  mParcela: DS.attr(),
  mConstruidos: DS.attr(),
  eficienciaEnergia: DS.attr(),
  anoConstr: DS.attr(),

  // mapaLat: DS.attr(),
  // mapaLng: DS.attr(),
  // codigoPostal: DS.attr(),

  estadoPropiedad: DS.attr(),
  tipoPropiedad: DS.attr(),
  localidad: DS.attr(),
  precioVenta: DS.attr(),
  destacado: DS.attr(),
  observacionesVenta: DS.attr(),
  // archivado: DS.attr(),
  visible: DS.attr(),

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
