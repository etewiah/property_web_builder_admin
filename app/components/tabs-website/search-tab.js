import Ember from 'ember';
import ContentPhoto from "../../models/content-photo";
import OnReadyMixin from "../../mixins/on-ready";
// above  so social inputs fade out and in

import TabWithForm from "../base/tab-with-form";


export default TabWithForm.extend(OnReadyMixin, {
  i18n: Ember.inject.service(),
  changedFields: [],

  salePriceOptionsFromField: {
    labelTextTKey: "",
    fieldName: "sale_price_options_from",
  },
  salePriceOptionsFrom: function(){
    var salePriceOptionsFrom = [];
    var vals = this.get("websiteDetails.sale_price_options_from");
    vals.forEach(function(val,index){
      var valObj = Ember.Object.create({
        value: val,
        index: index
      });
      salePriceOptionsFrom.pushObject(valObj);
    });
     // Ember.Object.create(this.get("websiteDetails.sale_price_options_from"));
    return salePriceOptionsFrom;
  }.property("websiteDetails.sale_price_options_from.[]"),

  salePriceOptionsTillField: {
    labelTextTKey: "",
    fieldName: "sale_price_options_till",
  },
  salePriceOptionsTill: function(){
    var salePriceOptionsTill = [];
    var vals = this.get("websiteDetails.sale_price_options_till");
    vals.forEach(function(val,index){
      var valObj = Ember.Object.create({
        value: val,
        index: index
      });
      salePriceOptionsTill.pushObject(valObj);
    });
    return salePriceOptionsTill;
  }.property("websiteDetails.sale_price_options_till.[]"),


  rentPriceOptionsFromField: {
    labelTextTKey: "",
    fieldName: "rent_price_options_from",
  },
  rentPriceOptionsFrom: function(){
    var rentPriceOptionsFrom = [];
    var vals = this.get("websiteDetails.rent_price_options_from");
    vals.forEach(function(val,index){
      var valObj = Ember.Object.create({
        value: val,
        index: index
      });
      rentPriceOptionsFrom.pushObject(valObj);
    });
     // Ember.Object.create(this.get("websiteDetails.rent_price_options_from"));
    return rentPriceOptionsFrom;
  }.property("websiteDetails.rent_price_options_from.[]"),

  rentPriceOptionsTillField: {
    labelTextTKey: "",
    fieldName: "rent_price_options_till",
  },
  rentPriceOptionsTill: function(){
    var rentPriceOptionsTill = [];
    var vals = this.get("websiteDetails.rent_price_options_till");
    vals.forEach(function(val,index){
      var valObj = Ember.Object.create({
        value: val,
        index: index
      });
      rentPriceOptionsTill.pushObject(valObj);
    });
    return rentPriceOptionsTill;
  }.property("websiteDetails.rent_price_options_till.[]"),

  actions: {

    // cancelChanges: function() {
    //   var resourceObject = this.get("resourceObject");
    //   var changedFields = this.get("changedFields");
    //   if (typeof resourceObject.rollbackAttributes === "function") {
    //     // for propertyResource which uses ember data:
    //     resourceObject.rollbackAttributes();
    //   } else {
    //     var changedFields = this.get("changedFields");
    //     changedFields.forEach(function(field) {
    //       this.set("resourceObject." + field.fieldName, field.originalValue);
    //     }.bind(this));
    //   }

    //   this.send("triggerReset");
    // }
  }

});
