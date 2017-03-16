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
    fieldName: "theme_name",
  },
  siteTemplateFieldKeys: function(){
    // var contentResources = this.get("contentResources");

    var fieldOptions = [];
    var currentValue = this.get("websiteDetails.theme_name") || "";

    // contentResources here is the model passed to website/tab route
    // -where tab is appearance it is a list of themes
    this.get("contentResources").forEach(function(option) {
      var fieldOption = Ember.Object.create({
        value: option.id,
        label: option.name,
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
      // websiteDetails are retrieved from the base route
      // http://re-renting.propertysquares.dev:3000/api/v1/agency
      var websiteDetails = this.get("websiteDetails");
      websiteDetails.save(function(successResponse) {}.bind(this));
    },

    saveContentItem: function(contentItem) {
      function success(contentItem) {
        // self.transitionToRoute('posts.show', post);
      }

      function failure(reason) {
        // handle the error
      }
      contentItem.save().then(success).catch(failure);
    }
  }

});
