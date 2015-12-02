import Ember from 'ember';
import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend({

  actions: {
    removePropertyForClient: function(propertyId) {
      var clientResource = this.get("resourceObject");
      clientResource.removeProperty(propertyId);
    }

  },
  isActive: function() {
    return this.activeTabName.toLowerCase() === "properties";
  }.property("activeTabName"),


});
