import Ember from 'ember';
import ContentPhoto from "../../models/content-photo";
import OnReadyMixin from "../../mixins/on-ready";
// above  so social inputs fade out and in

import TabWithForm from "../base/tab-with-form";


export default TabWithForm.extend(OnReadyMixin, {
  i18n: Ember.inject.service(),
  changedFields: [],

  areaUnitField: {
    headerTextTKey: "fieldLabels.defaultAreaUnit",
    fieldName: "default_area_unit",
  },
  areaUnitFieldKeys: [{
    value: "sqmt",
    labelTextTKey: "sqmt",
  }, {
    value: "sqft",
    labelTextTKey: "sqft",
  }],

  currencyField: {
    headerTextTKey: "fieldLabels.defaultCurrency",
    fieldName: "default_currency",
  },

  defaultLocaleField: {
    headerTextTKey: "fieldLabels.defaultLocale",
    fieldName: "default_client_locale",
  },
  // defaultLocaleFieldKeys: [{
  //   value: "sqmt",
  //   labelTextTKey: "sqmt",
  // }, {
  //   value: "sqft",
  //   labelTextTKey: "sqft",
  // }],

  defaultLocaleFieldKeys: function() {
    var supportedLocales = this.get("resourceObject.supported_locales");
    var defaultLocaleFieldKeys = [];
    supportedLocales.forEach(function(locale){
      var ltk = locale.split("-")[0];
      defaultLocaleFieldKeys.push({
        value: locale,
        labelTextTKey: ltk
      });
    })
    var defaultLocale = this.get("resourceObject.default_client_locale");
    if (!supportedLocales.includes(defaultLocale)) {
      this.set("resourceObject.default_client_locale", supportedLocales[0]);
    }
    return defaultLocaleFieldKeys;
  }.property("resourceObject.supported_locales"),

  availableLocaleFields: function() {
    var clientSetup = this.get("clientSetup");
    return clientSetup.availableLocaleFields;
  }.property("clientSetup"),

  currencyFieldKeys: function() {
    var currencyFieldKeys = this.get("clientSetup.currencyFieldKeys") || [];
    currencyFieldKeys.forEach(function(option) {
      option.label = this.get("i18n").t(option.labelTextTKey).string || "";
    }.bind(this));
    return currencyFieldKeys.sortBy("label");
  }.property("clientSetup"),
  
  // currencyFieldKeys: [{
  //   value: "EUR",
  //   labelTextTKey: "eur",
  // }, {
  //   value: "GBP",
  //   labelTextTKey: "gbp",
  // }, {
  //   value: "USD",
  //   labelTextTKey: "usd",
  // }],

  siteLayoutField: {
    labelTextTKey: "",
    fieldName: "style_variables.body_style",
    fieldType: "dynamicSelect",
    optionsKey: "layoutLabels",
  },
  siteLayoutFieldKeys: {
    layoutLabels: [
      "siteLayout.wide",
      "siteLayout.boxed"
    ]
  },
  actions: {
    // updateAppearance: function() {
    //   var agencyDetails = this.get("agencyDetails");
    //   agencyDetails.save(function(successResponse) {}.bind(this));
    // },
    // addPhotosFromUrls: function(remoteUrls) {
    //   // not yet in use.....
    //   // TODO - validate remote urls..
    //   var contentResources = this.get("contentResources");
    //   // This isn't the most robust implementation - above relies on content with tag 
    //   // corresponding to current route being available on server
    //   // Below relies on that content containing an item with correct key
    //   var contentWithPhotos = contentResources.findBy("key", "logo");
    //   contentWithPhotos.addPhotosFromUrls(remoteUrls, function(successResponse) {
    //     // this.actions.refreshPhotos(successResponse);
    //     // note, below is send and not sendAction
    //     this.send("refreshPhotos", successResponse);
    //   }.bind(this));

    // },
    // refreshPhotos: function(response) {
    //   // currently get the ff error the first time a photo is added
    //   // Uncaught Error: Assertion Failed: calling set on destroyed object
    //   // TODO - try fixing - perhaps with a refresh count property which
    //   // aboutUsPhot can observe.....
    //   this.set("logoPhoto", ContentPhoto.create(response));
    // },
  },


  // editPhotoEndpoint: function() {
  //   var contentResources = this.get("contentResources");
  //   var logoContent = contentResources.findBy("key", "logo");
  //   var logoPhoto = { id: 0 };
  //   if (logoContent) {
  //     // June 2016 - scenario where rerenting did not have content resource
  //     // for logo on server meant I had to add this check..
  //     logoPhoto = logoContent.get("photoModels.firstObject") || { id: 0 };
  //   }
  //   var editPhotoEndpoint = "/api/v1/web_contents/photos/" + logoPhoto.id + "/logo";
  //   return editPhotoEndpoint;
  // }.property("resourceObject.id"),

  // addPhotoEndpoint: function() {
  //   var contentResources = this.get("contentResources");
  //   var logoContent = contentResources.findBy("key", "logo") || {
  //     id: 0
  //   };
  //   var addPhotoEndpoint = "/api/v1/web_contents/" + logoContent.id + "/photo";
  //   return addPhotoEndpoint;
  // }.property("resourceObject.id"),


});
