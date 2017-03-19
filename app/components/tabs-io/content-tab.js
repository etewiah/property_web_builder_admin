import Ember from 'ember';
// import TabWithForm from "../base/tab-with-form";

// export default TabWithForm.extend({
// no need for TabWithForm here
export default Ember.Component.extend({
 url: function(){
    var activeTabObject = this.get("activeTabObject");
    return activeTabObject.importUrl;
  },
  actions: {

  }
});
