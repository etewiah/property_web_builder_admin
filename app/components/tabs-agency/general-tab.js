import Ember from 'ember';
import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend({
  changedFields: [],

  actions: {
    // saveAgencyDetails: function() {
    //   var agencyDetails = this.get("resourceObject");
    //   agencyDetails.save(function(success) {
    //     // triggerReset is an action in TabWithForm
    //     this.send("triggerReset");
    //   }.bind(this), function(error) {

    //   }.bind(this));
    // }

  },
  mainInputFields: [{
      labelTextTKey: "fieldLabels.companyName",
      // alertInfoTKey: "fieldLabels.company_name",
      fieldName: "company_name",
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
      labelTextTKey: "fieldLabels.primaryPhone",
      // alertInfoTKey: "fieldLabels.info.primaryPhone",
      fieldName: "phone_number_primary",
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
      fieldName: "phone_number_other",
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
    }
  ],
  emailInputFields: [{
      labelTextTKey: "fieldLabels.primaryEmail",
      // alertInfoTKey: "fieldLabels.info.primaryEmail",
      fieldName: "email_primary",
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
      labelTextTKey: "fieldLabels.generalContactEmail",
      alertInfoTKey: "fieldLabels.info.generalContactEmail",
      fieldName: "email_for_general_contact_form",
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
      labelTextTKey: "fieldLabels.propertyContactEmail",
      alertInfoTKey: "fieldLabels.info.propertyContactEmail",
      fieldName: "phone_number_other",
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
    }
  ],
  isActive: function() {
    return this.activeTabName.toLowerCase() === "general";
  }.property("activeTabName"),


});
