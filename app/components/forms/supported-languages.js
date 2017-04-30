import Ember from 'ember';

// The only reason for having this component instead of a list
// of simple booleans is so I can ensure that not all languages are unchecked...
// - also, they are not each discrete values on the resourceObject (agency in this case..)
export default Ember.Component.extend({
  classNames: ['form-group', 'fg-float'],
  actions: {
    changeSupportedLocale: function(fieldDetails, ev) {
      if (fieldDetails && ev) {
        // checkbox does not bind to fieldDetails automatically
        // so has to be done manually here
        fieldDetails.set("value", ev.target.checked);
        // debugger;
      }
      var fieldName = "supported_locales";
      var serverValue = this.get("serverValue");

      var newLocales = [];
      // take radioSets has which have been updated
      var radioSets = this.get("localesArrayWithValues");
      radioSets.forEach(function(radioSet) {
        // convert to simple array suitable for server
        if (radioSet.value) {
          if (!!!radioSet.currentLocaleVariant) {
            radioSet.set("currentLocaleVariant", radioSet.localeVariants[0]);
          }
          // var currentLocaleVariant = radioSet.currentLocaleVariant || radioSet.localeVariants[0];
          // below sets something like "es-es"
          newLocales.push(radioSet.currentLocaleVariant);
          // newLocales.push(radioSet.localeVariants[0]);
        }
      });
      // and set this on server field
      this.set("resourceObject.supported_locales", newLocales);
      // could have used radio-button friendly format to save to server
      // but would make adding extra languages in the future tricky..

      var hasChanged = false;
      // now figure out if values have changed from 
      // that on the server
      newLocales.forEach(function(newLocale) {
        if (!serverValue.contains(newLocale)) {
          hasChanged = true;
        }
      });
      serverValue.forEach(function(sv) {
        if (!newLocales.contains(sv)) {
          hasChanged = true;
        }
      });
      if (newLocales.length > 0) {
        this.set("errors", []);
        // this.set("supportedLanguages", newLocales);
        // this.sendAction("valueChangedAction", {});
        this.sendAction("valueChangedAction", {
          hasErrors: false,
          hasChanged: hasChanged,
          fieldName: fieldName,
          // below was add for extras which in case of cancelacion have to be unset individually
          // but has turned out useful for agency which is not an ember-data model
          originalValue: serverValue
        });
      } else {
        this.set("errors", ["errors.languageRequired"]);

        this.sendAction("valueChangedAction", {
          hasErrors: true,
          hasChanged: hasChanged,
          fieldName: fieldName,
          // below was add for extras which in case of cancelacion have to be unset individually
          // but has turned out useful for agency which is not an ember-data model
          originalValue: serverValue
        });
      }
    },

    // changeSupportedLanguage: function() {
    //   var fieldName = "supported_locales";
    //   var serverValue = this.get("serverValue");

    //   var newLocales = [];
    //   // take radioSets has which have been updated
    //   var radioSets = this.get("localesArrayWithValues");
    //   radioSets.forEach(function(radioSet) {
    //     // convert to simple array suitable for server
    //     if (radioSet.value) {
    //       newLocales.push(radioSet.fieldName);
    //     }
    //   });
    //   // and set this on server field
    //   this.set("resourceObject.supported_locales", newLocales);
    //   // could have used radio-button friendly format to save to server
    //   // but would make adding extra languages in the future tricky..

    //   var hasChanged = false;
    //   newLocales.forEach(function(newLocale) {
    //     if (!serverValue.contains(newLocale)) {
    //       hasChanged = true;
    //     }
    //   });
    //   serverValue.forEach(function(sv) {
    //     if (!newLocales.contains(sv)) {
    //       hasChanged = true;
    //     }
    //   });

    //   if (newLocales.length > 0) {
    //     this.set("errors", []);
    //     // this.set("supportedLanguages", newLocales);
    //     // this.sendAction("valueChangedAction", {});
    //     this.sendAction("valueChangedAction", {
    //       hasErrors: false,
    //       hasChanged: hasChanged,
    //       fieldName: fieldName,
    //       // below was add for extras which in case of cancelacion have to be unset individually
    //       // but has turned out useful for agency which is not an ember-data model
    //       originalValue: serverValue
    //     });
    //   } else {
    //     this.set("errors", ["errors.languageRequired"]);

    //     this.sendAction("valueChangedAction", {
    //       hasErrors: true,
    //       hasChanged: hasChanged,
    //       fieldName: fieldName,
    //       // below was add for extras which in case of cancelacion have to be unset individually
    //       // but has turned out useful for agency which is not an ember-data model
    //       originalValue: serverValue
    //     });
    //   }
    // }
  },
  // each time I save to the server, I increment resetTrigger value
  resetOriginalValue: Ember.observer('resetTrigger', function() {
    var serverValue = this.get("resourceObject.supported_locales") || [];
    var localesArrayWithValues = this.getLocalesArrayWithValues(serverValue);
    this.set("localesArrayWithValues", localesArrayWithValues);
  }),

  setOriginalValue: function() {
    // resourceObject obect contains the fields and current value of each field
    // find current value of the field we need to render
    var serverValue = this.get("resourceObject.supported_locales") || [];
    // eg ["en","es"]
    this.set("serverValue", serverValue);
    var localesArrayWithValues = this.getLocalesArrayWithValues(serverValue);
    this.set("localesArrayWithValues", localesArrayWithValues);
  }.on('init'),

  getLocalesArrayWithValues: function(supportedLocales) {
    // takes the array of locales which is saved in ("resourceObject.supported_locales") as ["en","es"];
    // and returns an array of objects that can be passed to radio-button component
    var languageFields = this.get("languageFields");
    var localesArrayWithValues = [];
    languageFields.forEach(function(field) {
      var fieldObject = Ember.Object.create(field);
      fieldObject.set("value", false);
      field.localeVariants.forEach(function(localeVariant) {
        if (supportedLocales.includes(localeVariant)) {
          fieldObject.set("currentLocaleVariant", localeVariant);
          fieldObject.set("value", true);
        }
      });
      // if (supportedLocales.includes(field.fieldName)) {
      //   fieldObject.set("value", true);
      // } else {
      //   fieldObject.set("value", false);
      // }
      localesArrayWithValues.push(fieldObject);
    });
    return localesArrayWithValues;
  }

});
