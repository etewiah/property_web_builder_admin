import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  // host: '/api/v1'
  namespace: '/api/v1',
  // headers: function(tt) {
  //   return {
  //     "token":"dddd",
  //   };
  // }.property("localStorage.token","token")
});