import Ember from 'ember';
// import es from "../../locales/es/translations";
// import en from "../../locales/en/translations";

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  showingVisibleProperties: function() {
    return this.get("propertiesStatus") === "visible";
  }.property(),

  actions: {
    importProperty: function(property) {
      debugger;
      // this.sendAction("hidePropertyAction", property);
    },

  },

  // setupEditor: function() {
  //   // console.log(es);
  //   var translations;
  //   if (this.get("i18n.locale") == "es") {
  //     translations = es;
  //   } else{
  //     translations = en;
  //   }
  //   // var esTranslations = es;
  //   // var datatablesLang = this.get("i18n").t("datatables");
  //   $('.datatables').dataTable({
  //     "language": translations.datatables
  //   });
  //   // not entirely sure if I need this:
  //   // this._super();
  // }.on('didInsertElement'),

});
