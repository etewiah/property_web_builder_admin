import Ember from 'ember';

export default Ember.Component.extend({

  contentValue: Ember.computed('contentItem', {
    get(key) {
        // return this.get("contentItem.rawEn");
        return this.get("contentItem." + this.languageSettings.contentFieldName);
      },
      set(key, value) {
        // this.set("contentItem.rawEn", value);
        this.set("contentItem." + this.languageSettings.contentFieldName, value);
        return value;
      }
  }),
  // titleValue: Ember.computed('contentItem', {
  //   get(key) {
  //       return this.get("contentItem." + this.languageSettings.titleFieldName);
  //     },
  //     set(key, value) {
  //       this.set("contentItem." + this.languageSettings.titleFieldName, value);
  //       return value;
  //     }
  // })
});
