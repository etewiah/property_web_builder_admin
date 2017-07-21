import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['form-group', 'fg-float'],
  // changedLinks: [],
  actions: {
    startAddNewLink: function() {
      // debugger;
    },
    changeNavbarItem: function(sectionDetails, ev) {
      var visibilityFieldName = "visible";
      var changedLinks = this.get("changedLinks");
      if (sectionDetails && ev) {
        // checkbox does not bind to sectionDetails automatically
        // so has to be done manually here
        Ember.set(sectionDetails, visibilityFieldName, ev.target.checked);
        if (changedLinks.includes(sectionDetails.slug)) {
          changedLinks.removeObject(sectionDetails.slug);
        } else {
          changedLinks.pushObject(sectionDetails.slug);
        }
      }

      var hasChanged = changedLinks.length > 0;
      this.set("hasChanged", hasChanged);
      // this.sendAction("valueChangedAction", {
      //   hasErrors: false,
      //   hasChanged: hasChanged,
      //   fieldName: "anything",
      //   originalValue: "anything"
      // });
    },
    // changeNavbarItemToDel: function(sectionDetails, ev) {
    //   var visibilityFieldName = "visible";
    //   if (sectionDetails && ev) {
    //     // checkbox does not bind to sectionDetails automatically
    //     // so has to be done manually here
    //     Ember.set(sectionDetails, visibilityFieldName, ev.target.checked);
    //     // debugger;
    //   }
    //   var hasChanged = false;
    //   var serverNavItems = this.get("siteSections.pristineItems");
    //   var editableNavItems = this.get("siteSections.items");

    //   // below is pretty useless
    //   // var diff = Ember.compare(serverNavItems, editableNavItems);
    //   // https://github.com/DockYard/ember-changeset
    //   // would be nice to use above for this - when I get the time
    //   serverNavItems.forEach(function(sv) {
    //     // var itemChanged = sv[visibilityFieldName] !== editableNavItems.findBy("id",sv.id)[visibilityFieldName];
    //     // 
    //     var topNavItemChanged = sv["show_in_top_nav"] !== editableNavItems.findBy("id", sv.id)["show_in_top_nav"];
    //     var footerItemChanged = sv["show_in_footer"] !== editableNavItems.findBy("id", sv.id)["show_in_footer"];
    //     if (topNavItemChanged || footerItemChanged) {
    //       hasChanged = true;
    //     }
    //   });
    //   this.set("errors", []);
    //   // this.sendAction("valueChangedAction", {});

    //   this.sendAction("valueChangedAction", {
    //     hasErrors: false,
    //     hasChanged: hasChanged,
    //     fieldName: "fieldName",
    //     // below was add for extras which in case of cancelacion have to be unset individually
    //     // but has turned out useful for agency which is not an ember-data model
    //     originalValue: "serverNavItems"
    //   });
    // },
  },
});
