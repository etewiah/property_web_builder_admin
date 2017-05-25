var Setup = Ember.Object.extend({
  // i18n: Ember.inject.service(),
  // created this to be able to handle sorting and translating currencyFieldKeys in one place
  // but I'm unabe to use i18n here. get error:
  // Assertion Failed: Attempting to lookup an injected property on an object without a container, ensure that the object was instantiated via a container
  // currencyFieldKeys2: function() {
  //   var currencyFieldKeys = this.get("currencyFieldKeys") || [];
  //   debugger;
  //   currencyFieldKeys.forEach(function(option) {
  //     debugger;
  //     option.label = this.get("i18n").t(option.labelTextTKey).string || "";
  //   }.bind(this));
  //   debugger;
  //   return currencyFieldKeys.sortBy("label");
  //   // TODO - avoid duplication in tabs-property gen tab
  //   // 
  // }.property("i18n"),

});

export default Setup;
