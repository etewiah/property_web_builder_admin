import Ember from 'ember';
import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend({
  changedFields: [],

  actions: {

  },
  mainInputFields: [{
      labelTextTKey: "fieldLabels.userName",
      // tooltipTextTKey: "toolTips.user_name",
      fieldName: "user_name",
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
