import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000',
  namespace: '/api/v1',
  pathForType: function(type) {
    return "web-contents";
    // above gives the chance to alias the model
    // return Ember.String.underscore(type);
  }
});