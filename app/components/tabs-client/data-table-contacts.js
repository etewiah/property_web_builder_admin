import Ember from 'ember';
import es from "../../locales/es/translations";
import en from "../../locales/en/translations";

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  // changeCount: 1,
  showingVisibleProperties: function() {
    return this.get("contactsStatus") === "visible";
  }.property(),
  // contactsToList: function(){
  //   var contacts = this.get("contacts");
  //   if (this.get("contactsStatus") === "visible") {
  //     return contacts.filterBy("visible", true);
  //   } else{
  //     return contacts.filterBy("visible", false);
  //   }
  // }.property("contacts", "contacts.[].visible","changeCount"),

  actions: {
    hideProperty: function(property) {
      this.sendAction("hidePropertyAction", property);
    },
    unHideProperty: function(property, target) {
      property.set("visible", true);
      // this.set("contacts", []);
      // this.rerender();
      property.save().then(
        function(result) {
          var contacts = this.get("contacts");
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
    $('.datatables').dataTable({
      "language": translations.datatables
    });
    // not entirely sure if I need this:
    // this._super();
  }.on('didInsertElement'),

});
