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
  siteTemplateField: {
    labelTextTKey: "",
    fieldName: "site_template_id",
  },
  siteTemplateFieldKeys: function(){
    // var contentResources = this.get("contentResources");

    var fieldOptions = [];
    var currentValue = this.get("tenantDetails.site_template_id") || "";

    // fieldOptionKeys
    this.get("contentResources.data").forEach(function(option) {
      var fieldOption = Ember.Object.create({
        value: option.id,
        label: option.attributes.title,
        checked: false
      });
      if (option.id === currentValue.toString()) {
        fieldOption.checked = true;
      }
      // this.get("i18n").t(option).string || "Unknown";
      fieldOptions.push(fieldOption);
    }.bind(this));


    return fieldOptions.sortBy("label");


    // return contentResources;
  }.property("contentResources"),
  // siteTemplateFieldKeys: {
  //   layoutLabels: [
  //     "siteLayout.wide",
  //     "siteLayout.boxed"
  //   ]
  // },
  rawCssField: {
    labelTextTKey: "",
    fieldName: "raw_css",
    // fieldType: "dynamicSelect",
    // optionsKey: "layoutLabels",
  },

  actions: {
    updateAppearance: function() {
      // tenantDetails are retrieved from the base route
      // http://re-renting.propertysquares.dev:3000/api/v1/agency
      var tenantDetails = this.get("tenantDetails");
      debugger;
      tenantDetails.save(function(successResponse) {}.bind(this));
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
    }
  },

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
  //     logoPhoto = logoContent.get("photoModels.firstObject") || { id: 0};
  //   }
  //   var editPhotoEndpoint = "/api/v1/web_contents/photos/" + logoPhoto.id + "/logo" ;
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

  // -using dynamic components so no longer needed
  // isVisible: function() {
  //   return this.get("activeTabfieldName").toLowerCase() === "general";
  // }.property("activeTabName"),

});
