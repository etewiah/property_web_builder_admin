import Ember from 'ember';

export default Ember.Mixin.create({
  onReady: function() {
    $('[data-toggle="tooltip"]').tooltip();
    // not entirely sure if I need this:
    this._super();
  }.on('didInsertElement'),

});
