import Ember from 'ember';
import es from "../../locales/es/translations";
import en from "../../locales/en/translations";

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  // changeCount: 1,
  showingVisibleProperties: function() {
    return this.get("propertiesStatus") === "visible";
  }.property(),
  // propertiesToList: function(){
  //   var properties = this.get("properties");
  //   if (this.get("propertiesStatus") === "visible") {
  //     return properties.filterBy("visible", true);
  //   } else{
  //     return properties.filterBy("visible", false);
  //   }
  // }.property("properties", "properties.[].visible","changeCount"),

  actions: {
    hideProperty: function(property) {
      this.sendAction("hidePropertyAction", property);
    },
    unHideProperty: function(property, target) {
      property.set("visible", true);
      // this.set("properties", []);
      // this.rerender();
      property.save().then(
        function(result) {
          var properties = this.get("properties");
          var datatableApi = $('.datatables').dataTable().api();
          // TODO - improve below by replacing id with a friendly calculated property
          datatableApi.row("#" + result.get("id")).remove().draw();

          // var changeCount = this.get("changeCount");
          // this.set("changeCount", changeCount + 1);
          // this.rerender();
        }.bind(this));
    }
  },

  setupEditor: function() {
    // console.log(es);
    var translations;
    if (this.get("i18n.locale") == "es") {
      translations = es;
    } else{
      translations = en;
    }
    // var esTranslations = es;
    // var datatablesLang = this.get("i18n").t("datatables");
    debugger;
    $('.datatables').dataTable({
      "language": translations.datatables
    });
    // not entirely sure if I need this:
    // this._super();
  }.on('didInsertElement'),

});
