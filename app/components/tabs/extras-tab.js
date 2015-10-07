import Ember from 'ember';


export default Ember.Component.extend({
  extrasInputFields1: function() {
    var extrasInputFields1 = [];
    var extrasFields1 = this.get("extrasFields1") || [];
    extrasFields1.forEach(function(fieldName) {
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
      extrasInputFields1.push(inputField);
    });
    // debugger;
    return extrasInputFields1;
  }.property("extrasFields1"),
  extrasInputFields2: function() {
    var extrasInputFields2 = [];
    var extrasFields2 = this.get("extrasFields2") || [];
    extrasFields2.forEach(function(fieldName) {
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
      extrasInputFields2.push(inputField);
    });
    // debugger;
    return extrasInputFields2;
  }.property("extrasFields2"),
  extrasFields1: [
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
  ],
  extrasFields2: [

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
  characteristicasInputFields: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "fieldLabels.eficienciaEnergia",
      tooltipTextTKey: "toolTips.eficienciaEnergia",
      fieldName: "eficienciaEnergia",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
      options: [{
        value: 1,
        titleKey: "Si"
      }, {
        value: 0,
        titleKey: "No"
      }]
    }, {
      labelTextTKey: "fieldLabels.anoConstr",
      tooltipTextTKey: false,
      fieldName: "anoConstr",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThan: 2016,
            greaterThan: 1500,
            message: "Invalid date",
          },
        }
      }
    }, {
      labelTextTKey: "fieldLabels.numHabitaciones",
      tooltipTextTKey: false,
      fieldName: "numHabitaciones",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 3000,
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.numBanos",
      tooltipTextTKey: false,
      fieldName: "numBanos",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 3000,
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.numAseos",
      tooltipTextTKey: false,
      fieldName: "numAseos",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 3000,
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.mParcela",
      tooltipTextTKey: false,
      fieldName: "mParcela",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 3000,
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.mConstruidos",
      tooltipTextTKey: false,
      fieldName: "mConstruidos",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 3000,
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.garaje",
      tooltipTextTKey: "toolTips.garaje",
      fieldName: "numGarajes",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
      options: [{
        value: 1,
        titleKey: "Si"
      }, {
        value: 0,
        titleKey: "No"
      }]
    },
  ],

  actions: {
    savePropertyResource: function() {
      var propertyResource = this.get("propertyResource");

      var self = this;

      function transitionToPost(propertyResource) {
        // debugger;
        // self.transitionToRoute('posts.show', post);
      }

      function failure(reason) {
        // debugger;
        // handle the error
      }

      propertyResource.save().then(transitionToPost).catch(failure);


    }
  },
  isActive: function() {
    return this.activeTabName.toLowerCase() === "extras";
  }.property("activeTabName"),


});
