import Ember from 'ember';


export default Ember.Component.extend({
  extrasInputFields1: function() {
    var extrasFields = {};
    var fieldNames = this.get("extrasFieldsNames") || [];
    var chunkLength = fieldNames.length / 3;
    // debugger;
    extrasFields.chunk1 = this.parseInputFields(fieldNames.splice(0, Math.ceil(chunkLength)));
    extrasFields.chunk2 = this.parseInputFields(fieldNames.splice(0, Math.ceil(chunkLength)));
    extrasFields.chunk3 = this.parseInputFields(fieldNames);
    // debugger;
    return extrasFields;
  }.property("extrasFieldsNames"),
  // extrasInputFields2: function() {
  //   var extrasFields2 = this.get("extrasFields2") || [];
  //   return this.parseInputFields(extrasFields2);
  // }.property("extrasFields2"),
  // extrasInputFields3: function() {
  //   var extrasFields3 = this.get("extrasFields3") || [];
  //   return this.parseInputFields(extrasFields3);
  // }.property("extrasFields3"),

  parseInputFields: function(fieldNames) {
    var inputFields = [];
    fieldNames.forEach(function(fieldName) {
      var inputField = {
        fieldName: fieldName,
        fieldDbType: "boolean",
        options: [{
          value: 1,
          titleKey: "Si"
        }, {
          value: 0,
          titleKey: "No"
        }]
      };
      inputField.labelTextTKey = "fieldLabels.extras." + fieldName;
      inputFields.push(inputField);
    });
    return inputFields;
  },

  extrasFieldsNames: [
    "aireAcondicionado",
    "alarma",
    "amueblado",
    "armariosEmpotrados",
    "ascensor",
    "balcon",
    "banoTurco",
    "buenaOrientacion",
    "calefaccionCentral",
    "calefaccionElectrica",
    "calefaccionPropano",
    "cocinaAmericana",
    "cocinaIndependiente",
    "domotica",
    "electrodomesticos",
    "energiaSolar",
    "garajeComunitario",
    "garajePrivado",
    "gresCeramica",
    "horno",
    "internet",
    "jacuzzi",
    "jardinComunitario",
    "jardinPrivado",
    "lavadero",
    "lavadora",
    "microondas",
    "nevera",
    "parquet",
    "piscinaClimatizada",
    "piscinaComunitaria",
    "piscinaPrivada",
    "puertaBlindada",
    "sauna",
    "servPorteria",
    "sueloMarmol",
    "terraza",
    "trastero",
    "tv",
    "videoportero",
    "vigilancia",
    "vistasAlMar",
    "zComunitaria",
    "zonaDeportiva",
    "cercaDelMar",
    "cercaDelAeropuerto",
    "cercaDeServicios",
    "calefaccionGasCiudad",
    "calefaccionGasoleo",
    "zonasInfantiles",
    "sueloRadiante",
    "tarimaFlotante",
    "paredesLisas",
    "gotele",
    "semiamueblado",
    "vistasALaSierra",
    "chimenea",
    "cocinaFrancesa",
    "barbacoa",
    "porche",
    "solarium",
    "patioInterior",
    "vistasALaMontana",
    "vistasAlJardin",
    "urbanizacion",
    "zonaTranquila",
    "escaparate",
    "techoDeMas3Mtos"
  ],

  actions: {
    saveExtrasObject: function() {
      var extrasObject = this.get("extrasObject");

      var self = this;

      function transitionToPost(extrasObject) {
        // debugger;
        // self.transitionToRoute('posts.show', post);
      }

      function failure(reason) {
        // debugger;
        // handle the error
      }

      extrasObject.save();
      // .then(transitionToPost).catch(failure);

    }
  },
  isActive: function() {
    return this.activeTabName.toLowerCase() === "extras";
  }.property("activeTabName"),


});
