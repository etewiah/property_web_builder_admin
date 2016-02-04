// jan 2016 - currently used by
// /Users/etewiah/Ed/sites-2015-spt/inmo1-client/app/routes/admin/setup.js
import DS from 'ember-data';
// import { translationMacro as t } from "ember-i18n";

var Info = DS.Model.extend({

  title: DS.attr(),
  raw: DS.attr(),

});

Info.reopenClass({
  // get: function() {
  //   // todo - set correct locale
  //   var apiUrl = "/api/v1/es/info";
  //   return $.ajax(apiUrl, {
  //     type: 'GET',
  //     dataType: 'json',
  //     // data: {
  //     //   field_names: fieldNames
  //     // }
  //   }).then(function(result) {
  //     var Info = Info.create(result.Info);
  //     var primaryAddress = MasterAddress.create(result.primary_address);
  //     var currentUser = User.create(result.current_user);
  //     debugger;
  //     return {
  //       InfoDetails: Info,
  //       primaryAddress: primaryAddress,
  //       currentUser: currentUser
  //     };
  //   }.bind(this), function(error) {
  //     return error;
  //   });
  // }
});


export default Info;
