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
      fieldName: "priceSaleCurrentCents",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 999999999999,
          }
        }
      }
    }, {
    //   labelTextTKey: "fieldLabels.saleDiscount",
    //   tooltipTextTKey: "toolTips.saleDiscount",
    //   fieldName: "saleDiscount",
    //   fieldType: "simpleSelect",
    //   fieldDbType: "boolean",
    // }, {
      labelTextTKey: "fieldLabels.priceSaleOriginal",
      tooltipTextTKey: "toolTips.priceSaleOriginal",
      fieldName: "priceSaleOriginalCents",
      fieldType: "simpleInput",
      inputType: "number",
      constraints: {
        inputValue: {
          numericality: {
            onlyInteger: true,
            lessThanOrEqualTo: 999999999999,
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
      fieldName: "forRentLongTerm",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
    }, {
      labelTextTKey: "fieldLabels.priceRentalMonthlyCurrent",
      tooltipTextTKey: "toolTips.priceRentalMonthlyCurrent",
      fieldName: "priceRentalMonthlyCurrentCents",
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
    //   labelTextTKey: "fieldLabels.longTermRentalDiscount",
    //   tooltipTextTKey: "toolTips.longTermRentalDiscount",
    //   fieldName: "longTermRentalDiscount",
    //   fieldType: "simpleSelect",
    //   fieldDbType: "boolean",
    // }, {
      labelTextTKey: "fieldLabels.priceRentalMonthlyOriginal",
      tooltipTextTKey: "toolTips.priceRentalMonthlyOriginal",
      fieldName: "priceRentalMonthlyOriginalCents",
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
      labelTextTKey: "fieldLabels.seasonalRental",
      tooltipTextTKey: "toolTips.seasonalRental",
      fieldName: "forRentShortTerm",
      fieldType: "simpleSelect",
      fieldDbType: "boolean",
    }, {
      labelTextTKey: "fieldLabels.priceRentalMonthlyLowSeason",
      tooltipTextTKey: false,
      fieldName: "priceRentalMonthlyLowSeasonCents",
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
      labelTextTKey: "fieldLabels.priceRentalMonthlyStandardSeason",
      tooltipTextTKey: false,
      fieldName: "priceRentalMonthlyStandardSeasonCents",
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
      labelTextTKey: "fieldLabels.priceRentalMonthlyHighSeason",
      tooltipTextTKey: false,
      fieldName: "priceRentalMonthlyHighSeasonCents",
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
