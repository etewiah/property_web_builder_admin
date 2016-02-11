import Ember from 'ember';


export default Ember.Component.extend({
  actions: {
    changeSupportedLanguage: function() {
      var supportedLanguages = [];
      var languageOptions = this.get("languageOptions");
      Object.keys(languageOptions).forEach(
        function(languageOption){
          if (languageOptions[languageOption]) {
            supportedLanguages.push(languageOption);
          }
          // debugger;
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
  languageFields: [{
    labelTextTKey: "es",
    // tooltipTextTKey: "toolTips.visible",
    fieldName: "es",
    // fieldType: "simpleSelect",
    // fieldDbType: "boolean",
  }, {
    labelTextTKey: "en",
    // tooltipTextTKey: "toolTips.visible",
    fieldName: "en",
    // fieldType: "simpleSelect",
    // fieldDbType: "boolean",
  }, 
  // {
  //   labelTextTKey: "ca",
  //   fieldName: "ca",
  // }
  ],
  languageOptions: function() {
      var supportedLanguages = this.get("supportedLanguages");
      var languageOptions = {};
      supportedLanguages.forEach(function(language) {
        languageOptions[language] = true;
      });
      return languageOptions;
    }.property()
    // languageOptions: {
    //   en: true,
    //   ca: false
    // }

});
