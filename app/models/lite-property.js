import DS from 'ember-data';
// import PropertyPhoto from "../models/property-photo";

export default DS.Model.extend({

  // i18n: Ember.inject.service(),

  // might be better to do translation of title on the server
  // tTitle: Ember.computed('i18n.locale', function() {
  //   var titleLocalisedProp = "title" + this.get("i18n.locale").capitalize();
  //   return this.get(titleLocalisedProp);
  // }),
  // name: DS.attr('string'),
  // tTipoPropiedad: t("propertyTypes." + this.get("tipoPropiedad")),

  // 19 nov 2015 - not entirely sure I want to carry on with this:
  // tTipoPropiedad: Ember.computed('i18n.locale', 'tipoPropiedad', function() {
  //   return this.get("i18n").t(this.get("tipoPropiedad"));
  // }),


  // propertyPhotos: DS.hasMany('property-photo', {
  //   async: false
  // }),
  // // can't quite figure out how to use the relationship above so using 
  // // below which is just a raw array
  // photos: DS.attr({
  //   dontSerialize: true
  // }),
  // photoModels: Ember.computed('photos', function() {
  //   var photos = this.get("photos");
  //   var photoModels = [];
  //   photos.forEach(function(photo) {
  //     // console.log(photoModels);
  //     photoModels.push(PropertyPhoto.create(photo));
  //   }.bind(this));
  //   return photoModels;
  // }),

  owner: DS.attr({
    dontSerialize: true
  }),
  extras: DS.attr({
    dontSerialize: true
      // above works to prevent sending this attr to server
      // cos of serializeAttribute override in serializer 
  }),


  reference: DS.attr(),
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

  // contextualPriceCents: DS.attr("currency", { defaultValue: 0 }),
  priceSaleCurrentCents: DS.attr("currency", {
    defaultValue: 0
  }),
  priceSaleOriginalCents: DS.attr("currency", {
    defaultValue: 0
  }),
  priceRentalMonthlyCurrentCents: DS.attr("currency", {
    defaultValue: 0
  }),
  priceRentalMonthlyOriginalCents: DS.attr("currency", {
    defaultValue: 0
  }),
  priceRentalMonthlyLowSeasonCents: DS.attr("currency", {
    defaultValue: 0
  }),
  priceRentalMonthlyHighSeasonCents: DS.attr("currency", {
    defaultValue: 0
  }),
  priceRentalMonthlyStandardSeasonCents: DS.attr("currency", {
    defaultValue: 0
  }),


  origenPropiedad: DS.attr(),

  countBedrooms: DS.attr(),
  countBathrooms: DS.attr(),
  numAseos: DS.attr(),
  countGarages: DS.attr(),
  plotArea: DS.attr(),
  constructedArea: DS.attr(),
  eficienciaEnergia: DS.attr(),
  yearConstruction: DS.attr(),

  // mapaLat: DS.attr(),
  // mapaLng: DS.attr(),
  // codigoPostal: DS.attr(),

  propStateKey: DS.attr(),
  propTypeKey: DS.attr(),
  // localidad: DS.attr(),
  // precioVenta: DS.attr(),
  highlighted: DS.attr(),
  observacionesVenta: DS.attr(),
  // archivado: DS.attr(),
  visible: DS.attr(),

  idealista: DS.attr(),
  yaencontre: DS.attr(),
  pisoscom: DS.attr(),

  localityTitle: DS.attr(),
  zoneTitle: DS.attr(),

});
