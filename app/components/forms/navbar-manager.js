import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-group', 'fg-float'],
  actions: {
    changeSupportedLocale: function(sectionDetails, ev) {
      if (sectionDetails && ev) {
        // checkbox does not bind to sectionDetails automatically
        // so has to be done manually here
        Ember.set(sectionDetails, "visible", ev.target.checked);
        // debugger;
      }
      var hasChanged = false;
      var serverNavItems = this.get("serverNavItems");
      var siteSections = this.get("siteSections");

      // below is pretty useless
      // var diff = Ember.compare(serverNavItems, siteSections.items);
      // https://github.com/DockYard/ember-changeset
      // would be nice to use above for this - when I get the time
      serverNavItems.forEach(function(sv) {
        var itemChanged = sv.visible !== siteSections.items.findBy("id",sv.id).visible
        // debugger;
        if (itemChanged) {
          hasChanged = true;
        }
      });
      this.set("errors", []);
      // this.set("supportedLanguages", newLocales);
      // this.sendAction("valueChangedAction", {});

      this.sendAction("valueChangedAction", {
        hasErrors: false,
        hasChanged: hasChanged,
        fieldName: "fieldName",
        // below was add for extras which in case of cancelacion have to be unset individually
        // but has turned out useful for agency which is not an ember-data model
        originalValue: "serverNavItems"
      });
    },

  },
  // each time I save to the server, I increment resetTrigger value
  // resetOriginalValue: Ember.observer('resetTrigger', function() {
  //   var serverNavItems = this.get("resourceObject.supported_locales") || [];
  //   var localesArrayWithValues = this.getLocalesArrayWithValues(serverNavItems);
  //   this.set("localesArrayWithValues", localesArrayWithValues);
  // }),

  setOriginalValue: function() {
    this.set("serverNavItems", this.get("siteSections.items").copy(true));
  }.on('init'),

  // getLocalesArrayWithValues: function(supportedLocales) {
  //   return this.get("siteSections");
  // },


});
