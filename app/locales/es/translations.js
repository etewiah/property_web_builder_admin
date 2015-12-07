// https://github.com/jamesarosen/ember-i18n/issues/256
// a hack to allow en to be used as a fallback..
import Ember from "ember";
import en from "../en/translations";

export default Ember.merge(Ember.copy(en), {

  en: "Ingles",
  es: "Español",


  save: "Save",
  cancel: "Cancel",

  street: "Street",
  street_number: "Street Number",
  city: "City",
  postCode: "Post Code",
  region: "Region",
  country: "Country",

  "null": "",

  "addProperty": "Añadir propiedad",
  "addClient": "Añadir cliente",
  "newProperty": "Nuevo Propiedad",
  "newClient": "Nuevo Cliente",
  "propertiesList": "Listado de propiedades",
  "clientsList": "Listado de clientes",

  "prompts": {
    "fixErrors": "Please correct the errors below"
  },

  "todos": {
    "createContent": "Create some content",
    "companyDetails": "Set up your company details"
  },
 
  "prompts": {
    "fixErrors": "Please correct the errors below"
  },

  "buttonLabels": {
    "configureAvailableExtras": "Configure available extras",
    //   "editar": "Editar",
    //   "nuevo": "Nuevo",
    //   "guardar": "Guardar",
    //   "crear": "Crear",
  },

  "locationTab": {
    "confirmAddress": "Confirm new location"
  },

  "fieldLabels": {
    "firstNames": "First Name",
    "lastNames": "Last Names",
    "visible": "Visible",
    "highlighted": "Highlighted",
    "label": "Label",
    "companyName": "Company Name",
    "primaryPhone": "Main phone number",
    "otherPhone": "Other phone number",
    "nationality": "Nationality",
    "documentationType": "Documentation Type",
    "documentationId": "Documentation Id",
    "email": "Email",
    "fax": "Fax",
    "skype": "Skype",
    "personTitle": "Title"
  },

  // for header row in property listing
  "propertyLabels": {
    "highlighted": "Destacado",
    "locality": "Localidad",
    "actions": "Acciones",
    "zone": "Zona",
    "price": "Precio",
    "rooms": "Hab.",
    "visible": "Visible",
    "reference": "Ref",
    "type": "Tipo"
  },


  // left nav
  "adminSections": {
    "start": "Inicio",
    "agencyDetails": "Mis Datos",
    "content": "Contenido",
    "translations": "Traduciones",
    "properties": "Propiedades",
    "clientes": "Clientes"
  },

  // the header tabs within each left nav item:
  "agencySections": {
    "general": "Agency Details",
    "location": "Location",
    "user": "User Details"
  },


  "propertySections": {
    "general": "General",
    "location": "Situación",
    "description": "descripción",
    "extras": "Extras",
    "photos": "Fotos",
    "sale": "Venta",
    "owner": "Proprietario"
  },

  "propertyGeneralSections": {
    "visibility": "Visibility",
    "generalData": "Datos Generales",
    "seasonalRental": "Alquiler de temporada",
    "characteristics": "Características",
    "portals": "Portales",
    "extras": "Extras",
  },


  "translationsSections": {
    "extras": "Extras",
    "propertyTypes": "Property Tipos",
    "propertyOrigins": "Property Origen",
    "propertyStates": "Property Estado",
    "propertyLabels": "Property Labels",
    "provinces": "Provincias"
  },
  

  "toolTips": {
    "addNew": "Añadir nuevo",
    "visible": "Sí para publicar el inmueble en su web",
    "highlighted": "Sí para poner el inmueble en la sección",
    // above 2 for individual property page...
    "temporadas": "Si el inmueble se alquila por temporadas",
    "precioAntiguo": "El precio antes de la rebaja",
    "precioAlquiler": "0 si el inmueble sólo es para venta",
    "precioVenta": "Precio de venta",
    "eficienciaEnergia": "Elija la eficiencia energética del inmueble",
    "garaje": "Si el inmueble dispone de plaza de garaje o no",
    "ref": "Referencia del inmueble",
    "yaencontre": "Sí para publicar en Yaencontre, previo contrato con ellos.",
    "pisoscom": "Sí para publicar en Pisoscom, previo contrato con ellos.",
    "idealista": "Sí para publicar en Idealista, previo contrato con ellos."
  },



  "some.translation.key": "Text for some.translation.key",
  "a": {
    "nested": {
      "key": "Text for a.nested.key"
    }
  },

  "key.with.interpolation": "Text with {{anInterpolation}}",

  errors: {
    inclusion: "is not included in the list",
    exclusion: "is reserved",
    invalid: "is invalid",
    confirmation: "doesn't match {{attribute}}",
    accepted: "must be accepted",
    empty: "can't be empty",
    blank: "can't be blank",
    present: "must be blank",
    tooLong: "is too long (maximum is {{count}} characters)",
    tooShort: "is too short (minimum is {{count}} characters)",
    wrongLength: "is the wrong length (should be {{count}} characters)",
    notANumber: "is not a number",
    notAnInteger: "must be an integer",
    greaterThan: "must be greater than {{count}}",
    greaterThanOrEqualTo: "must be greater than or equal to {{count}}",
    equalTo: "must be equal to {{count}}",
    lessThan: "must be less than {{count}}",
    lessThanOrEqualTo: "must be less than or equal to {{count}}",
    otherThan: "must be other than {{count}}",
    odd: "must be odd",
    even: "must be even"
  }
});


  // "key.with.interpolation": "Text with {{anInterpolation}}"
  // "fieldLabels": {
  //   "precioAntiguo": "Original Price",
  //   "precioAlquiler": "Precio Alquiler",
  //   "origen": "Origen",
  //   "temporadas": "Temporadas",
  //   "precioTa": "Precio Temp. Alta",
  //   "precioTm": "Precio Temp. Media",
  //   "precioTb": "Precio Temp. Baja",
  //   "eficienciaEnergia": "Eficiencia Energia",
  //   "anoConstr": "Año constr",
  //   "numHabitaciones": "Núm. habitaciones",
  //   "numBanos": "Núm. baños",
  //   "numAseos": "Núm. aseos",
  //   "mParcela": "m. parcela",
  //   "mConstruidos": "m. construidos",
  //   "garaje": "Garaje",
  //   "extras": {
  //     aireAcondicionado: "Aire acondicionado",
  //     alarma: "Alarma",
  //     amueblado: "Amueblado",
  //     armariosEmpotrados: "Armarios empotrados",
  //     ascensor: "Ascensor",
  //     balcon: "Balcón",
  //     banoTurco: "Baño turco",
  //     buenaOrientacion: "Buena orientacion",
  //     calefaccionCentral: "Calefacción central",
  //     calefaccionElectrica: "Calefacción eléctrica",
  //     calefaccionPropano: "Calefacción Propano",
  //     cocinaAmericana: "Cocina Americana",
  //     cocinaIndependiente: "Cocina Independiente",
  //     domotica: "Domótica",
  //     electrodomesticos: "Electrodomésticos",
  //     energiaSolar: "Energía Solar",
  //     garajeComunitario: "Garaje Comunitario",
  //     garajePrivado: "Garaje Privado",
  //     gresCeramica: "Gres Cerámica",
  //     horno: "Horno",
  //     internet: "Internet",
  //     jacuzzi: "Jacuzzi",
  //     jardinComunitario: "Jardín Comunitario",
  //     jardinPrivado: "Jardín Privado",
  //     lavadero: "Lavadero",
  //     lavadora: "Lavadora",
  //     microondas: "Microondas",
  //     nevera: "Nevera",
  //     parquet: "Parquet",
  //     piscinaClimatizada: "Piscina climatizada",
  //     piscinaComunitaria: "Piscina comunitaria",
  //     piscinaPrivada: "Piscina privada",
  //     puertaBlindada: "Puerta Blindada",
  //     sauna: "Sauna",
  //     servPorteria: "Serv. portería",
  //     sueloMarmol: "Suelo Mármol",
  //     terraza: "Terraza",
  //     trastero: "Trastero",
  //     tv: "TV",
  //     videoportero: "Videoportero",
  //     vigilancia: "Vigilancia",
  //     vistasAlMar: "Vistas al mar",
  //     zComunitaria: "Z. Comunitaria",
  //     zonaDeportiva: "Zona Deportiva",
  //     cercaDelMar: "Cerca del mar",
  //     cercaDelAeropuerto: "Cerca del Aeropuerto",
  //     cercaDeServicios: "Cerca de Servicios",
  //     calefaccionGasCiudad: "Calefacción gas ciudad",
  //     calefaccionGasoleo: "Calefacción gasóleo",
  //     zonasInfantiles: "zonas infantiles",
  //     sueloRadiante: "Suelo radiante",
  //     tarimaFlotante: "Tarima flotante ",
  //     paredesLisas: "Paredes lisas",
  //     gotele: "Gotelé",
  //     semiamueblado: "Semiamueblado ",
  //     vistasALaSierra: "Vistas a la sierra",
  //     chimenea: "Chimenea",
  //     cocinaFrancesa: "Cocina francesa",
  //     barbacoa: "Barbacoa",
  //     porche: "Porche",
  //     solarium: "Solarium",
  //     patioInterior: "Patio interior",
  //     vistasALaMontana: "Vistas a la montaña",
  //     vistasAlJardin: "Vistas al jardín",
  //     urbanizacion: "Urbanizacíón",
  //     zonaTranquila: "Zona tranquila",
  //     escaparate: "escaparate",
  //     techoDeMas3Mtos: "Techo de mas 3 mtos."
  //   }
  // },
  // "provincias": {
  //   albacete: "Albacete",
  //   alicante: "Alicante",
  //   almeria: "Almería",
  //   asturias: "Asturias",
  //   badajoz: "Badajoz",
  //   baleares: "Baleares",
  //   barcelona: "Barcelona",
  //   burgos: "Burgos",
  //   cantabria: "Cantabria",
  //   castellon: "Castellón",
  //   ceuta: "Ceuta",
  //   ciudadReal: "Ciudad Real",
  //   cuenca: "Cuenca",
  //   caceres: "Cáceres",
  //   cadiz: "Cádiz",
  //   cordoba: "Córdoba",
  //   gerona: "Gerona",
  //   granada: "Granada",
  //   guadalajara: "Guadalajara",
  //   guipuzcoa: "Guipúzcoa",
  //   huelva: "Huelva",
  //   huesca: "Huesca",
  //   jaen: "Jaén",
  //   laCoruna: "La Coruña",
  //   laRioja: "La Rioja",
  //   lasPalmas: "Las Palmas",
  //   leon: "León",
  //   lugo: "Lugo",
  //   lerida: "Lérida",
  //   madrid: "Madrid",
  //   melilla: "Melilla",
  //   murcia: "Murcia",
  //   malaga: "Málaga",
  //   navarra: "Navarra",
  //   orense: "Orense",
  //   palencia: "Palencia",
  //   pontevedra: "Pontevedra",
  //   sCTenerife: "S.C. Tenerife",
  //   salamanca: "Salamanca",
  //   segovia: "Segovia",
  //   sevilla: "Sevilla",
  //   soria: "Soria",
  //   tarragona: "Tarragona",
  //   teruel: "Teruel",
  //   toledo: "Toledo",
  //   valencia: "Valencia",
  //   valladolid: "Valladolid",
  //   vizcaya: "Vizcaya",
  //   zamora: "Zamora",
  //   zaragoza: "Zaragoza",
  //   alava: "Álava",
  //   avila: "Ávila"
  // },

  // propertyTypes: {
  //   null: "Unknown",
  //   apartamento: "Apartamento",
  //   chaletIndependiente: "Chalet independiente",
  //   bungalow: "Bungalow",
  //   inversion: "Inversión",
  //   solar: "Solar",
  //   duplex: "Duplex",
  //   nave: "Nave",
  //   piso: "Piso",
  //   hotel: "Hotel",
  //   chaletAdosado: "Chalet Adosado",
  //   atico: "Ático",
  //   estudio: "Estudio",
  //   garaje: "Garaje",
  //   local: "Local",
  //   trastero: "Trastero",
  //   villa: "Villa",
  //   casaRural: "Casa Rural",
  //   semiatico: "Semiático",
  //   posesion: "Posesión",
  //   majorcanPosesion: "Majorcan Posesión",
  //   edificioResidencial: "Edificio residencial",
  //   plantaBajaConJardin: "Planta baja con jardín",
  //   fincaRustica: "Finca rústica",
  // },