import Ember from 'ember';
import ContentPhoto from "../../models/content-photo";
import OnReadyMixin from "../../mixins/on-ready";
// above  so social inputs fade out and in

import TabWithForm from "../base/tab-with-form";


export default TabWithForm.extend(OnReadyMixin, {
  // languages: ["En", "Es"],
  changedFields: [],
  siteLayoutField: {
    labelTextTKey: "",
    fieldName: "body_style",
    fieldType: "dynamicSelect",
    optionsKey: "layoutLabels",
  },
  siteLayoutFieldKeys: {
    layoutLabels: [
      "siteLayout.wide",
      "siteLayout.boxed"
    ]
  },
  // siteTemplateField: {
  //   labelTextTKey: "",
  //   fieldName: "theme_name",
  // },
  // siteTemplateFieldKeys: function() {
  //   var fieldOptions = [];
  //   var currentValue = this.get("websiteDetails.theme_name") || "";

  //   // contentResources here is the model passed to website/tab route
  //   // -where tab is appearance it is a list of themes
  //   this.get("contentResources").forEach(function(option) {
  //     var fieldOption = Ember.Object.create({
  //       value: option.id,
  //       label: option.name,
  //       checked: false
  //     });
  //     if (option.id === currentValue.toString()) {
  //       fieldOption.checked = true;
  //     }
  //     // this.get("i18n").t(option).string || "Unknown";
  //     fieldOptions.push(fieldOption);
  //   }.bind(this));

  //   return fieldOptions.sortBy("label");
  //   // return contentResources;
  // }.property("contentResources"),

  rawCssField: {
    labelTextTKey: "",
    fieldName: "raw_css",
    // fieldType: "dynamicSelect",
    // optionsKey: "layoutLabels",
  },

  actions: {
    updateAppearance: function() {
      // websiteDetails are retrieved from the base route
      // http://re-renting.propertysquares.dev:3000/api/v1/agency
      var websiteDetails = this.get("websiteDetails");
      websiteDetails.save(function(successResponse) {}.bind(this));
    },

    saveContentItem: function(contentItem) {
      function success(contentItem) {
        // self.transitionToRoute('posts.show', post);
      }
      debugger;

      function failure(reason) {
        // handle the error
      }
      contentItem.save().then(success).catch(failure);
    },
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
    refreshPhotos: function(response) {
      // currently get the ff error the first time a photo is added
      // Uncaught Error: Assertion Failed: calling set on destroyed object
      // TODO - try fixing - perhaps with a refresh count property which
      // aboutUsPhot can observe.....
      this.set("logoPhoto", ContentPhoto.create(response));
    },
  },

  logoPhoto: function() {
    var contentResources = this.get("contentResources");
    var logoContent = contentResources.findBy("key", "logo");
    var logoPhoto = {};
    if (logoContent) {
      logoPhoto = logoContent.get("photoModels.firstObject") || {};
    }
    return logoPhoto;
  }.property("contentResources"),

  editPhotoEndpoint: function() {
    var contentResources = this.get("contentResources");
    var logoContent = contentResources.findBy("key", "logo");
    var logoPhoto = { id: 0 };
    if (logoContent) {
      // June 2016 - scenario where rerenting did not have content resource
      // for logo on server meant I had to add this check..
      logoPhoto = logoContent.get("photoModels.firstObject") || { id: 0 };
    }
    var editPhotoEndpoint = "/api/v1/web_contents/photos/" + logoPhoto.id + "/logo";
    return editPhotoEndpoint;
  }.property("resourceObject.id"),

  addPhotoEndpoint: function() {
    var contentResources = this.get("contentResources");
    var logoContent = contentResources.findBy("key", "logo") || {
      id: 0
    };
    var addPhotoEndpoint = "/api/v1/web_contents/" + logoContent.id + "/photo";
    return addPhotoEndpoint;
  }.property("resourceObject.id"),

});
