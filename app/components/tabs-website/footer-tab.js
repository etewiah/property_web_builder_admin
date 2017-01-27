import Ember from 'ember';
import ContentPhoto from "../../models/content-photo";
import OnReadyMixin from "../../mixins/on-ready";
// above  so social inputs fade out and in

import TabWithForm from "../base/tab-with-form";


export default TabWithForm.extend(OnReadyMixin, {
  // languages: ["En", "Es"],
  changedFields: [],
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
  //   return availableLocaleFields;
  // }.property(),

  // actions: {
  //   updateAppearance: function() {
  //     var agencyDetails = this.get("agencyDetails");
  //     agencyDetails.save(function(successResponse) {}.bind(this));
  //   }
  // },

  socialNetworkFields: [{
    fieldName: "social_media.facebook",
    title: "Facebook",
    class: "fa fa-facebook fa-2x"
      // tooltipTextTKey: false,
      // constraints: {
      //   inputValue: {
      //     url: {
      //       message: "errors.notAUrlVjs"
      //     }
      //   }
      // }
  }, {
    fieldName: "social_media.twitter",
    title: "Twitter",
    class: "fa fa-twitter fa-2x"
  }, {
    fieldName: "social_media.youtube",
    title: "Youtube",
    class: "fa fa-youtube fa-2x"
  }, {
    fieldName: "social_media.linkedin",
    title: "LinkedIn",
    class: "fa fa-linkedin fa-2x"
  }, {
    fieldName: "social_media.gplus",
    title: "Google Plus",
    class: "fa fa-google-plus fa-2x"
  }, {
    fieldName: "social_media.pinterest",
    title: "Pinterest",
    class: "fa fa-pinterest fa-2x"
  }, {
    fieldName: "social_media.instagram",
    title: "Instagram",
    class: "fa fa-instagram fa-2x"
  }],

});
