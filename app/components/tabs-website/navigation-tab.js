import Ember from 'ember';
import ContentPhoto from "../../models/content-photo";
import OnReadyMixin from "../../mixins/on-ready";
// above  so social inputs fade out and in
import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend(OnReadyMixin, {
  // languages: ["En", "Es"],
  changedFields: [],


  // siteSections: function() {
  //   // debugger;
  //   // var clientSetup = this.get("clientSetup");
  //   // return clientSetup.availableLocaleFields;
  //   return this.get("contentResources");
  // }.property("clientSetup"),

  setResourceObject: function() {
    // need to change below so manage-changes-buttons partial has
    // the right object to save;
    this.set("resourceObject", this.get("contentResources"))
  }.on('init'),

  actions: {

  },

});
