import Ember from 'ember';
// import ContentPhoto from "../../models/content-photo";
// import OnReadyMixin from "../../mixins/on-ready";
// above  so social inputs fade out and in

import TabWithForm from "../base/tab-with-form";


export default TabWithForm.extend({
  actions: {

    saveSections: function(changedSection) {
      function success(changedSection) {
        // self.transitionToRoute('posts.show', post);
      }

      function failure(reason) {
        // handle the error
      }
      changedSection.save().then(success).catch(failure);
    }
  },


});
