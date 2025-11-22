import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  host: 'http://localhost:3000',
  namespace: '/api/v1'
});

// import DS from 'ember-data';

// export default DS.RESTAdapter.extend({
// });
