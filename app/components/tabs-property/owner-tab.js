import Ember from 'ember';


export default Ember.Component.extend({


  clientSelectValues: function(){
    return this.get("fieldKeys.clients");
    // debugger;
  }.property(),

  // selectOwnerFieldDetails: {
  //     labelTextTKey: "fieldLabels.label",
  //     fieldName: "observacionesVenta",
  //     fieldType: "dynamicSelect",
  //     optionsKey: "clients",
  // },

  actions: {
    savePropertyResource: function() {
      var propertyResource = this.get("propertyResource");
debugger;
      function transitionToPost(propertyResource) {
        // self.transitionToRoute('posts.show', post);
      }

      function failure(reason) {
        // handle the error
      }
      propertyResource.save().then(transitionToPost).catch(failure);
    }
  },


  isActive: function() {
    return this.activeTabName.toLowerCase() === "owner";
  }.property("activeTabName"),

  setupComponent: function() {
    // var currentValue = this.get("resourceObject." + this.fieldDetails.fieldName) || "";
    // var fieldOptions = this.get("fieldOptions");
    // var currentOption = fieldOptions.findBy("value", currentValue);
    // var currentOptionValue = currentOption ? currentOption.value : "";

    var sp = this.$(".selectpicker").selectpicker({
      iconBase: 'fa',
      tickIcon: 'fa-check'
    });
    sp.on('change', function(evt) {
      debugger;
      var fieldName = this.get("fieldDetails.fieldName");
      var selected = evt.target.value;
      // $(this).find("option:selected").val();
      var fieldOptions = this.get("fieldOptions");
      var selectValue = fieldOptions.findBy("value", selected).value;
      this.set("resourceObject." + fieldName, selectValue);

      var hasChanged = (this.get("originalValue") !== selectValue);

      this.sendAction("valueChangedAction", {
        hasErrors: false,
        hasChanged: hasChanged,
        fieldName: fieldName
      });

    }.bind(this));

    this.$('.selectpicker').selectpicker('refresh');
    // this.set("inputValue", this.get("resourceObject." + this.fieldDetails.fieldName));
  }.on('didInsertElement'),



});
