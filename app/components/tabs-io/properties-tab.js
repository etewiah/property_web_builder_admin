import Ember from 'ember';
// import TabWithForm from "../base/tab-with-form";

// export default TabWithForm.extend({
// no need for TabWithForm here
export default Ember.Component.extend({
  exportUrl: function(){
    // 
    if (location.hostname === "localhost") {
      return "http://localhost:3000/export/properties";
    } else {
      return "/export/properties"
    }
  }.property(),
  url: function() {
    var selectedOption = this.get("optionsObject.selected_option");
    if (selectedOption === "MLS") {
      return "/import/properties/from_mls";
    } else {
      return "/import/properties";
    }
    // var activeTabObject = this.get("activeTabObject");
    // return activeTabObject.importUrl;
  }.property('optionsObject.selected_option'),
  optionsObject: function() {
    var optionsObject = Ember.Object.create({
      selected_option: "PWB"
    });
    return optionsObject;
  }.property(),
  optionsField: {
    fieldName: "selected_option",
    headerTextTKey: "fieldLabels.defaultCurrency",
  },
  optionsFieldKeys: [{
    value: "PWB",
    labelTextTKey: "pwb",
  }, {
    value: "MLS",
    labelTextTKey: "mls",
  }],
  actions: {
    optionsChanged: function() {}

  }
});
