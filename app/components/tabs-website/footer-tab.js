import Ember from 'ember';
import ContentPhoto from "../../models/content-photo";
import OnReadyMixin from "../../mixins/on-ready";
// above  so social inputs fade out and in

import TabWithForm from "../base/tab-with-form";


export default TabWithForm.extend(OnReadyMixin, {
  changedFields: [],
  actions: {
    saveContentItem: function(contentItem) {
      function success(contentItem) {
        // self.transitionToRoute('posts.show', post);
      }

      function failure(reason) {
        // handle the error
      }
      contentItem.save().then(success).catch(failure);
    }
  },
  // footerContentResources: function(){
  //   debugger;
  // }.property("contentResources"),
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
