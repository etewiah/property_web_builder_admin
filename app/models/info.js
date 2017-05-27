// jan 2016 - currently used by
// /Users/etewiah/Ed/sites-2015-spt/inmo1-client/app/routes/admin/setup.js
import DS from 'ember-data';
// import { translationMacro as t } from "ember-i18n";

var Info = DS.Model.extend({

  title: DS.attr(),
  raw: DS.attr(),

});

Info.reopenClass({

});


export default Info;
