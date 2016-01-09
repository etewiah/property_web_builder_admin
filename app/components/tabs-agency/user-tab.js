import Ember from 'ember';
import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend({
  changedFields: [],

  actions: {

  },
  leftInputFields: [{
      labelTextTKey: "fieldLabels.firstNames",
      // tooltipTextTKey: "toolTips.user_name",
      fieldName: "first_names",
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
      // e
      // tooltipTextTKey: "toolTips.user_name",
      fieldName: "last_names",
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
  rightInputFields: [{
      labelTextTKey: "fieldLabels.email",
      // e
      // tooltipTextTKey: "toolTips.user_name",
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
  isActive: function() {
    return this.activeTabName.toLowerCase() === "user";
  }.property("activeTabName"),


});
