import Ember from 'ember';
import ContentPhoto from "../../models/content-photo";
import OnReadyMixin from "../../mixins/on-ready";
// above  so social inputs fade out and in

import TabWithForm from "../base/tab-with-form";


export default TabWithForm.extend(OnReadyMixin, {
  // languages: ["En", "Es"],
  changedFields: [],
  availableLocaleFields: [{
      labelTextTKey: "es",
      fieldName: "es",
      localeVariants: ["es-ES","es-MX"]
    }, {
      labelTextTKey: "en",
      fieldName: "en",
      localeVariants: ["en-UK","en-US"]
    }
  ],
  // availableLocaleFields: function() {
  //   var availableLocalesArray = this.get("agencyDetails.available_locales") || ["en", "fr"];
  //   // above looks like ["en","es"]
  //   var availableLocaleFields = [];
  //   availableLocalesArray.forEach(function(locale) {
  //     availableLocaleFields.push({
  //       labelTextTKey: locale,
  //       fieldName: locale
  //     });
  //   });
  //   // above returns items suitable for forms/simple-boolean like:
  //   // {
  //   //   labelTextTKey: "en",
  //   //   fieldName: "en",
  //   // }
  //   return availableLocaleFields;
  // }.property(),

  currencyField: {
    headerTextTKey: "fieldLabels.defaultCurrency",
    fieldName: "default_currency",
  },
  currencyFieldKeys: [{
    value: "EUR",
    label: "Euros",
  }, {
    value: "GBP",
    label: "UK Pounds",
  }, {
    value: "USD",
    label: "Dollars",
  }],

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

  // socialNetworkFields: [{
  //   fieldName: "social_media.facebook",
  //   title: "Facebook",
  //   class: "fa fa-facebook fa-2x"
  //     // tooltipTextTKey: false,
  //     // constraints: {
  //     //   inputValue: {
  //     //     url: {
  //     //       message: "errors.notAUrlVjs"
  //     //     }
  //     //   }
  //     // }
  // }, {
  //   fieldName: "social_media.twitter",
  //   title: "Twitter",
  //   class: "fa fa-twitter fa-2x"
  // }, {
  //   fieldName: "social_media.youtube",
  //   title: "Youtube",
  //   class: "fa fa-youtube fa-2x"
  // }, {
  //   fieldName: "social_media.linkedin",
  //   title: "LinkedIn",
  //   class: "fa fa-linkedin fa-2x"
  // }, {
  //   fieldName: "social_media.gplus",
  //   title: "Google Plus",
  //   class: "fa fa-google-plus fa-2x"
  // }, {
  //   fieldName: "social_media.pinterest",
  //   title: "Pinterest",
  //   class: "fa fa-pinterest fa-2x"
  // }, {
  //   fieldName: "social_media.instagram",
  //   title: "Instagram",
  //   class: "fa fa-instagram fa-2x"
  // }],



  // logoPhoto: function() {
  //   var contentResources = this.get("contentResources");
  //   var logoContent = contentResources.findBy("key", "logo");
  //   var logoPhoto = {};
  //   if (logoContent) {
  //     logoPhoto = logoContent.get("photoModels.firstObject") || {};
  //   }
  //   return logoPhoto;
  // }.property("contentResources"),

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
