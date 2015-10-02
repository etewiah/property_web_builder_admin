import Ember from 'ember';


export default Ember.Component.extend({
  actions: {
    savePropertyRecord: function() {
      var propertyRecord = this.get("property");
      // debugger;

      var self = this;

      function transitionToPost(propertyRecord) {
        // debugger;
        // self.transitionToRoute('posts.show', post);
      }

      function failure(reason) {
        // debugger;
        // handle the error
      }

      propertyRecord.save().then(transitionToPost).catch(failure);


    }
  },


  isActive: function() {
    return this.activeTabName.toLowerCase() === "descripcion";
  }.property("activeTabName"),

});
