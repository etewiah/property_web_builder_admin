import Ember from 'ember';


export default Ember.Component.extend({
  situacionInputFields: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "fieldLabels.eficienciaEnergia",
      tooltipTextTKey: "toolTips.eficienciaEnergia",
      fieldName: "eficienciaEnergia",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
      options: [{
        value: 1,
        titleKey: "Si"
      }, {
        value: 0,
        titleKey: "No"
      }]
    }, {
      labelTextTKey: "fieldLabels.anoConstr",
      tooltipTextTKey: false,
      fieldName: "anoConstr",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThan: 2016,
            greaterThan: 1500,
            message: "Invalid date",
          },
        }
      }
    }, {
      labelTextTKey: "fieldLabels.numHabitaciones",
      tooltipTextTKey: false,
      fieldName: "numHabitaciones",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 3000,
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.numBanos",
      tooltipTextTKey: false,
      fieldName: "numBanos",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 3000,
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.numAseos",
      tooltipTextTKey: false,
      fieldName: "numAseos",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 3000,
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.mParcela",
      tooltipTextTKey: false,
      fieldName: "mParcela",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 3000,
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.mConstruidos",
      tooltipTextTKey: false,
      fieldName: "mConstruidos",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 3000,
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.garaje",
      tooltipTextTKey: "toolTips.garaje",
      fieldName: "numGarajes",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
      options: [{
        value: 1,
        titleKey: "Si"
      }, {
        value: 0,
        titleKey: "No"
      }]
    },
  ],

  // actions: {
  //   savePropertyResource: function() {
  //     var propertyResource = this.get("propertyResource");

  //     // var self = this;

  //     function transitionToPost(propertyResource) {
  //       // self.transitionToRoute('posts.show', post);
  //     }

  //     function failure(reason) {
  //       // handle the error
  //     }

  //     propertyResource.save().then(transitionToPost).catch(failure);


  //   }
  // },


  isActive: function() {
    return this.activeTabName.toLowerCase() === "situacion";
  }.property("activeTabName"),

});
