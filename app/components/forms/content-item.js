import Ember from 'ember';

export default Ember.Component.extend({

  contentValue: Ember.computed('contentItem', {
    get(key) {
        // return this.get("contentItem.rawEn");
        return this.get("contentItem.raw" + this.languageSettings);
      },
      set(key, value) {
        // this.set("contentItem.rawEn", value);
        this.set("contentItem.raw" + this.languageSettings, value);
        return value;
      }
  }),
  // labelKey: Ember.computed('contentItem', {
  //   get(key) {
  //       return "webContentLabels." + this.get("contentItem.key");
  //        // + this.get("languageSettings");
  //     }
  // }),
  labelSuffixKey: Ember.computed('contentItem', {
    get(key) {
        return "webContentLabels.suffix" + this.get("languageSettings");
      }
  })
});
