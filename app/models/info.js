// jan 2017 - currently used by
// /inmo1-client/app/routes/admin/setup.js
import DS from 'ember-data';
// idea is to retrieve website actions list and links for home page from here
// currently returning empty array
// - TODO - include in admin_meta.js

var Info = DS.Model.extend({

  title: DS.attr(),
  raw: DS.attr(),

});

Info.reopenClass({

});


export default Info;
