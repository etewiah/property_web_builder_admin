// https://github.com/jamesarosen/ember-i18n/issues/256
// a hack to allow en to be used as a fallback..
import Ember from "ember";
import en from "../en/translations";

export default Ember.merge(Ember.copy(en), {

  "": "",
  "ar": "Arabe",
  "en": "Inglés",
  "es": "Español",
  "ca": "Catalán",
  "fr": "Francés",
  "ru": "Ruso",
  "nl": "Hollandés",
  "it": "Italiano",
  "de": "Alemán",
  "pt": "Portugués",

  "save": "Guardar",
  "cancel": "Cancelar",
  "edit": "Editar",
  "preview": "Vista previa",
  "close": "Cerrar",
  "addLogo": "Añadir Logo",
  "addPhotos": "Añadir Photos",
  "create": "Crear",
  "delete": "Eliminar",
  "show": "Mostrar",
  "hide": "Ocultar",
  "logo": "Logotipo",
  "aboutUsPhoto": "Foto sección Sobre Nosotros",
  "addAboutUsPhoto": "Añadif foto sección Sobre Nosotros",

  "visible": "Visible",
  "hidden": "Oculto",

  "cards": {
    "website": "Página web",
    "websitePrompt": "Acciones sobre la página web",
    "websiteLink": "Ir al panel de control de la web",
    "properties": "Propiedades",
    "propertiesPrompt": "Acciones sobre propiedades.",
    "propertiesLink": "Ir a propiedades",
  },
  "tasks": {
    "addProperty": "Añadir una propiedad",
    "addPropertyPrompt": "Propiedades / Añadir propiedad",
    "manageProperties": "Gestionar propiedades",
    "managePropertiesPrompt": "Propiedades / Gestionar propiedades",
    "changeLogo": "Añadir o cambiar mi logotipo",
    "changeLogoPrompt": "Web / Configuración de la web",
    "changeLang": "Cambiar los idiomas de mi web",
    "changeLangPrompt": "Web / Configuración de la web",
    "changeLegalText": "Añadir o cambiar textos legales",
    "manageLandingCarousel": "Gestionar carousel del pagina principal",
    "changeAboutUsText": "Añadir o cambiar texto 'sobre nosotros'",
    "managePropertyTypes": "Gestionar tipos de propiedades",
    "managePropertyExtras": "Gestionar extras de propiedades"
  },

  "buttonLabels": {
    "configureAvailableExtras": "Configurar extras",
    "selectImagesToAdd": "Seleccionar imágenes para subir",
    "selectRemoteImages": "Añadir imágenes desde url"
      //   "editar": "Editar",
      //   "nuevo": "Nuevo",
      //   "guardar": "Guardar",
      //   "crear": "Crear",
  },

  "alerts": {
    "changesDetected": "Se han detectado cambios.",
    "deletingProperty": "Por favor, confirma este cambio.",
    "navigatingFromChanges": "Tienes cambios sin guardar. Por favor, pulsa guardar o cancelar.",
    "visibleProperties": "Estas son las propiedades que están visibles en tu web",
    "hiddenProperties": "Estas propiedades NO están visibles en tu web",
    "clickMapToUpdate": "Pincha en el mapa para actualizar la ubicación de la propiedad.",
  },

  "datatables": {
    "sProcessing": "Procesando...",
    "sLengthMenu": "Mostrar _MENU_ registros",
    "sZeroRecords": "No se encontraron resultados",
    "sEmptyTable": "Ningún dato disponible en esta tabla",
    "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
    "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
    "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
    "sInfoPostFix": "",
    "sSearch": "Buscar",
    "sUrl": "",
    "sInfoThousands": ",",
    "sLoadingRecords": "Cargando...",
    "oPaginate": {
      "sFirst": "<<",
      "sLast": ">>",
      "sNext": ">",
      "sPrevious": "<"
    },
    "oAria": {
      "sSortAscending": ": Orden ascendente",
      "sSortDescending": ": Orden descendente"
    }
  },

  "alert": {
    "deleteItem": "Estás seguro de que quieres eliminar este elemento?",
    "deleteButton": "Sí, eliminar!"
  },

  "street": "Calle",
  "streetAddress": "Direccion",
  "streetNumber": "Número",
  "city": "Ciudad",
  "postCode": "Código Postal",
  "region": "Region",
  "zone": "Zona", 
  "locality": "Localidad", 
  "country": "País",

  "properties": "Propiedades",

  "null": "",

  "editWebsite": "Editar la Web",
  "settingsForWebsite": "Configuración de la web",
  "contentForWebsite": "Contenido para la web", 
  "sectionsForWebsite": "Secciónes de la web",
  "themesForWebsite": "Website Themes",
  "importExport": "Importar y exportar datos",
  "returnToWebsite": "Volver a la web",
  "settingsForProperties": "Configuración de propiedades",
  "returnToProperties": "Volver a propiedades",
  "addProperty": "Añadir propiedad",
  "addClient": "Añadir cliente",
  "newProperty": "Nueva Propiedad",
  "newClient": "Nuevo Cliente",
  "propertiesList": "Listado de propiedades",
  "clientsList": "Listado de clientes",

  "prompts": {
    "fixErrors": "Por favor, corrija los errores siguientes"
  },

  "todos": {
    "createContent": "Crear contenidos",
    "companyDetails": "Editar los detalles de la empresa"
  },

  "locationTab": {
    "confirmAddress": "Confirmar nueva ubicación"
  },

  "fieldLabels": {
    "forSearchWidget": "Para la búsqueda",
    "obscureMap": "No mostrar dirección exacta en la web?",
    "hideMap": "No mostrar mapa en la web",
    "forSale": "Para venta?",
    "priceSaleCurrent": "Precio",
    "saleDiscount": "Descuento",
    "priceSaleOriginal": "Precio original",
    "longTermRental": "Disponible para alquiler a largo plazo?",
    "seasonalRental": "Disponible para alquiler vacacional?",
    "priceRentalMonthlyHighSeason": "Precio de temporada alta",
    "priceRentalMonthlyLowSeason": "Precio de temporada baja",
    "priceRentalMonthlyStandardSeason": "Precio de temporada media",
    "priceRentalMonthlyCurrent": "Precio de alquiler (mensual)",
    "longTermRentalDiscount": "Descuento en el alquiler",
    "priceRentalMonthlyOriginal": "Precio original del alquiler (mensual)",


    "firstNames": "Nombre",
    "lastNames": "Apellidos",
    "visible": "Visible",
    "highlighted": "Destacados",
    "label": "Etiqueta",
    "companyName": "Nombre de la empresa",
    "primaryPhone": "Teléfono principal",
    "otherPhone": "Teléfono 2",
    "nationality": "Nacionalidad",
    "documentationType": "Tipo de documento",
    "documentationId": "Número de documento",
    "email": "Email",
    "fax": "Fax",
    "skype": "Skype",
    "personTitle": "Sr, Sra. o similar",
    "description": "Descripción",
    "title": "Título",
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
  // "adminSections": {
  //   "start": "Inicio",
  //   "agencyDetails": "Agencia",
  //   "content": "Página Web",
  //   "translations": "Traduciones",
  //   "properties": "Propiedades",
  //   "clientes": "Clientes",
  //   "quit": "Ir a la web",
  //   "list": "Lista",
  //   "settings": "Configuración",
  //   "labels": "Etiquetas"
  // },

  // the header tabs within each left nav item:
  "agencySections": {
    "general": "Detalles de la agencia",
    "location": "Ubicación",
    "user": "Usuario"
  },

  // labels with a tab:
  // "inTabLabels": {
  //   "currency": "Currency",
  //   "colors": "Colores",
  //   "socialLinks": "Redes sociales",
  //   "siteLayout": "Modo de visualización",
  //   "colorPrimary": "Color principal",
  //   "colorSecondary": "Color secundario",
  //   "colorActions": "Color acciones",
  //   "supportedLanguages": "Idiomas",
  //   "visibility": "Visibilidad"
  // },

  "siteLayout": {
    "wide": "Panorámico",
    "boxed": "Encajada"
  },

  // "currency": {
  //   "eur": "Euros",
  //   "usd": "US Dollars",
  //   "egp": "Egyptian Pound"
  // },
  
  "propertySections": {
    "general": "General",
    "location": "Situación",
    // "description": "descripción",
    "text": "Texto",
    "extras": "Extras",
    "photos": "Fotos",
    "sale": "Venta / Alquiler",
    "owner": "Proprietario"
  },

  "propertyGeneralSections": {
    "sale": "Venta",
    "longtermRental": "Alquiler de larga duración",
    "seasonalRental": "Alquiler de temporada",
    "visibility": "Visibilidad",
    "generalData": "Datos Generales",
    "characteristics": "Características",
    "portals": "Portales",
    "extras": "Extras",
  },

  "translationsSections": {
    "extras": "Extras",
    "propertyTypes": "Tipos de propiedades",
    "propertyOrigins": "Orígenes de propiedades",
    "propertyStates": "Estados de propiedades",
    "propertyLabels": "Etiquetas",
    "provinces": "Provincias"
  },

  "toolTips": {
    "forSale": "venta",
    "priceSaleCurrent": "Precio de venta",
    "saleDiscount": "Descuento",
    "priceSaleOriginal": "Precio original",
    "longTermRental": "Alquiler a largo plazo",
    "priceRentalMonthlyCurrent": "Precio (mensual)",
    "longTermRentalDiscount": "Descuento precio alquiler",
    "priceRentalMonthlyOriginal": "Precio de alquiler original",

    "addNewEntry": "Añadir nuevo entrada",
    // "addNew": "Añadir nuevo",
    "visible": "Sí para publicar el inmueble en su web",
    "highlighted": "Sí para poner el inmueble en la sección",
    // above 2 for individual property page...
    "seasonalRental": "Si el inmueble se alquila por temporadas",
    // don't think below 3 are in use anymore
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



  "some.translation.key": "Texto para some.translation.key",
  "a": {
    "nested": {
      "key": "Texto para a.nested.key"
    }
  },

  "key.with.interpolation": "Texto con {{anInterpolation}}",

  errors: {
    genericServerError: "Lo siento, se ha producido un error",
    languageRequired: "Seleccionar a menos una idioma",
    inclusion: "no está en la lista",
    exclusion: "está reservado",
    invalid: "no es válido",
    confirmation: "no concuerda con {{attribute}}",
    accepted: "debe ser aceptado",
    empty: "no puede estar vacío",
    blank: "no puede estar en blanco",
    present: "debe estar en blanco",
    tooLong: "es demasiado largo (maximo {{count}} caracteres)",
    tooShort: "is too short (mínimo {{count}} caracteres)",
    wrongLength: "longitud del texto incorrecta (deben ser {{count}} caracteres)",
    notANumber: "no es un número",
    notAnInteger: "debe ser un número entero",
    greaterThan: "debe ser mayor que {{count}}",
    greaterThanOrEqualTo: "debe ser mayor o igual que {{count}}",
    equalTo: "debe ser igual a {{count}}",
    lessThan: "debe ser menor que {{count}}",
    lessThanOrEqualTo: "debe ser menor o igual que {{count}}",
    otherThan: "debe ser diferente a {{count}}",
    odd: "must be par",
    even: "must be impar",
    // below for validatejs - will need to figure out a way to do interpolation:
    tooShortVjs: "es demasiado corto",
    notAUrlVjs: "no es una URL válida",
  },
  
  // // some of these are in server side translations that come from seed file for each tenant
  // "webContentLabels": {
    // "suffixAr": "en Arabe",
    // "suffixFr": "en Francés",
    // "suffixIt": "en Italiano",
    // "suffixPt": "en Portugués",
    // "suffixDe": "en Alemán",
    // "suffixEn": "en Inglés",
    // "suffixEs": "en Español",
    // "privacyPolicy": "Texto de la política de privacidad",
    // "legalAdvice": "Texto del aviso legal",
    // "landingcarousel": "Texto del slider",
    // "cac1": "Columna 1",
    // "cac2": "Columna 2",
    // "cac3": "Columna 3",
  //   // "tagLine": "Lema"
  //   // "landingPageHeroEs": "Contenido para pagina principal en Español"
  // },
  // "webContentSections": {
    // "legal": "Aviso Legal",
    // "general": "General",
    // "landingCarousel": "Slider",
    // "home": "Home",
    // "contentAreaCols": "Columnas",
    // "sections": "Secciónes",
    // "info": {
    //   "contentAreaCols": "Columnas del pagina principal"
    // }

  // }
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
//   "yearConstruction": "Año constr",
//   "countBedrooms": "Núm. habitaciones",
//   "countBathrooms": "Núm. baños",
//   "numAseos": "Núm. aseos",
//   "plotArea": "m. parcela",
//   "constructedArea": "m. construidos",
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
