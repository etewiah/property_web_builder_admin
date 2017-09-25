import Ember from 'ember';
import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend({
  changedFields: [],

  actions: {
    // saveClientDetails: function() {
    //   var clientResource = this.get("resourceObject");


    //   var self = this;

    //   function success(result) {
    //     // triggerReset is an action in TabWithForm
    //     self.send("triggerReset");
    //   }

    //   function failure(reason) {
    //     // debugger;
    //     // handle the error
    //   }
    //   clientResource.save().then(success).catch(failure);
    // }

  },
  leftSideInputFields: [{
    labelTextTKey: "fieldLabels.personTitle",
    fieldName: "clientTitle",
    fieldType: "dynamicSelect",
    optionsKey: "person-titles",
  }, {
    labelTextTKey: "fieldLabels.firstNames",
    fieldName: "first_name",
    fieldType: "simpleInput",
    inputType: "text",
    constraints: {
      inputValue: {
        length: {
          minimum: 2,
          tooShort: "needs to have %{count} characters or more"
        }
      }
    }
  }, {
    labelTextTKey: "fieldLabels.lastNames",
    fieldName: "last_name",
    fieldType: "simpleInput",
    inputType: "text",
    constraints: {
      inputValue: {
        length: {
          minimum: 2,
          tooShort: "needs to have %{count} characters or more"
        }
      }
    }
  }, {
    labelTextTKey: "fieldLabels.nationality",
    fieldName: "nationality",
    fieldType: "simpleInput",
    inputType: "text",
    constraints: {
      inputValue: {
        length: {
          minimum: 2,
          tooShort: "needs to have %{count} characters or more"
        }
      }
    }
  }, {
    labelTextTKey: "fieldLabels.documentationType",
    fieldName: "documentationType",
    fieldType: "simpleInput",
    inputType: "text",
    constraints: {
      inputValue: {
        length: {
          minimum: 2,
          tooShort: "needs to have %{count} characters or more"
        }
      }
    }
  }, {
    labelTextTKey: "fieldLabels.documentationId",
    fieldName: "documentationId",
    fieldType: "simpleInput",
    inputType: "text",
    constraints: {
      inputValue: {
        length: {
          minimum: 2,
          tooShort: "needs to have %{count} characters or more"
        }
      }
    }
  }],
  rightSideInputFields: [{
    labelTextTKey: "fieldLabels.primaryPhone",
    fieldName: "phoneNumberPrimary",
    fieldType: "simpleInput",
    inputType: "text",
    constraints: {
      inputValue: {
        length: {
          minimum: 2,
          tooShort: "needs to have %{count} characters or more"
        }
      }
    }
  }, {
    labelTextTKey: "fieldLabels.otherPhone",
    fieldName: "phoneNumberOther",
    fieldType: "simpleInput",
    inputType: "text",
    constraints: {
      inputValue: {
        length: {
          minimum: 2,
          tooShort: "needs to have %{count} characters or more"
        }
      }
    }
  }, {
    labelTextTKey: "fieldLabels.email",
    fieldName: "email",
    fieldType: "simpleInput",
    inputType: "text",
    constraints: {
      inputValue: {
        length: {
          minimum: 2,
          tooShort: "needs to have %{count} characters or more"
        }
      }
    }
  }, {
    labelTextTKey: "fieldLabels.fax",
    fieldName: "fax",
    fieldType: "simpleInput",
    inputType: "text",
    constraints: {
      inputValue: {
        length: {
          minimum: 2,
          tooShort: "needs to have %{count} characters or more"
        }
      }
    }
  }, {
    labelTextTKey: "fieldLabels.skype",
    fieldName: "skype",
    fieldType: "simpleInput",
    inputType: "text",
    constraints: {
      inputValue: {
        length: {
          minimum: 2,
          tooShort: "needs to have %{count} characters or more"
        }
      }
    }
  }],
  isActive: function() {
    return this.activeTabName.toLowerCase() === "general";
  }.property("activeTabName"),


});
