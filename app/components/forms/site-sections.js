import Ember from 'ember';


export default Ember.Component.extend({
  actions: {
    changeSections: function() {
      debugger;
      var supportedLanguages = [];
      var languageOptions = this.get("languageOptions");
      Object.keys(languageOptions).forEach(
        function(languageOption){
          if (languageOptions[languageOption]) {
            supportedLanguages.push(languageOption);
          }
        });
      if (supportedLanguages.length > 0) {
        this.set("errors", []);
        this.set("supportedLanguages", supportedLanguages);
        this.sendAction("valueChangedAction", {});
      }
      else{
        this.set("errors", ["errors.languageRequired"]);
      }
    }
  },
  sectionFields: function() {
      var sections = this.get("sections");
      var sectionFields = [];
      sections.forEach(function(section) {
        var field = {
          labelTextTKey: "navbar."+section.get("linkKey"),
          fieldName: section.get("linkKey")
        }
        sectionFields.push(field);
      });
      return sectionFields;
    }.property(),
  sectionOptions: function() {
      var sections = this.get("sections");
      var sectionOptions = {};
      sections.forEach(function(section) {
        sectionOptions[section.get("linkKey")] = section.get("visible");
      });
      return sectionOptions;
    }.property(),
    // sectionOptions: {
    //   en: true,
    //   ca: false
    // }

});
