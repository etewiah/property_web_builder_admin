import Ember from 'ember';
import TabWithForm from "../base/tab-with-form";

export default TabWithForm.extend({
  changedFields: [],
  saleInputFields: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "fieldLabels.forSale",
      tooltipTextTKey: "toolTips.forSale",
      fieldName: "forSale",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
    }, {
      labelTextTKey: "fieldLabels.priceSaleCurrent",
      tooltipTextTKey: "toolTips.priceSaleCurrent",
      fieldName: "priceSaleCurrent",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 999999999,
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.saleDiscount",
      tooltipTextTKey: "toolTips.saleDiscount",
      fieldName: "saleDiscount",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
    }, {
      labelTextTKey: "fieldLabels.priceSaleOriginal",
      tooltipTextTKey: "toolTips.priceSaleOriginal",
      fieldName: "priceSaleOriginal",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 999999999,
          }
        }
      }
    },
  ],
  longTermRentalInputFields: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "fieldLabels.longTermRental",
      tooltipTextTKey: "toolTips.longTermRental",
      fieldName: "longTermRental",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
    }, {
      labelTextTKey: "fieldLabels.priceRentalMonthlyCurrent",
      tooltipTextTKey: "toolTips.priceRentalMonthlyCurrent",
      fieldName: "priceRentalMonthlyCurrent",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 999999999,
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.longTermRentalDiscount",
      tooltipTextTKey: "toolTips.longTermRentalDiscount",
      fieldName: "longTermRentalDiscount",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
    }, {
      labelTextTKey: "fieldLabels.priceRentalMonthlyOriginal",
      tooltipTextTKey: "toolTips.priceRentalMonthlyOriginal",
      fieldName: "priceRentalMonthlyOriginal",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 999999999,
          }
        }
      }
    },
  ],
  shortTermRentalInputFields: [
    //this comment tricks prettify ;) 
    {
      labelTextTKey: "fieldLabels.temporadas",
      tooltipTextTKey: "toolTips.temporadas",
      fieldName: "temporadas",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
    }, {
      labelTextTKey: "fieldLabels.precioTa",
      tooltipTextTKey: false,
      fieldName: "precioTa",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 999999999,
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.precioTm",
      tooltipTextTKey: false,
      fieldName: "precioTm",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 999999999,
          }
        }
      }
    }, {
      labelTextTKey: "fieldLabels.precioTb",
      tooltipTextTKey: false,
      fieldName: "precioTb",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 999999999,
          }
        }
      }
    }
  ],


  isActive: function() {
    return this.activeTabName.toLowerCase() === "venta";
  }.property("activeTabName"),

});
