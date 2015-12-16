import Ember from 'ember';
// http://stackoverflow.com/questions/27154886/ember-cli-where-to-reopen-framework-classes
export default Em.LinkComponent.reopen({
  init: function() {
    this._super();
    var self = this;
    Em.keys(this).forEach(function(key) {
      if (key.substr(0, 5) === 'data-') {
        self.get('attributeBindings').pushObject(key);
      }
    });
  }
});
