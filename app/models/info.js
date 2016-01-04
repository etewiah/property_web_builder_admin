import DS from 'ember-data';
// import { translationMacro as t } from "ember-i18n";



var Info = DS.Model.extend({

  title: DS.attr(),
  raw: DS.attr(),
  // save: function(complete, error) {
  //   var InfoProperties = this.getProperties( Object.keys(this) );
  //   var data = {
  //     Info: InfoProperties
  //   };
  //   // debugger;
  //   var self = this;
  //   var apiUrl = '/api/v1/Info';
  //   return $.ajax(apiUrl, {
  //     type: 'PUT',
  //     dataType: 'json',
  //     data: data
  //   }).then(function(result) {
  //     // self.set("geo", result);
  //     if (complete) {
  //       // self.set('posts', result.posts);
  //       complete(result);
  //     }
  //   }, function(result) {
  //     if (error) {
  //       error(result);
  //     }
  //   });
  // },

});

Info.reopenClass({
  get: function() {
    var apiUrl = "/api/v1/es/info";
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      // data: {
      //   field_names: fieldNames
      // }
    }).then(function(result) {
      var Info = Info.create(result.Info);
      var primaryAddress = MasterAddress.create(result.primary_address);
      var currentUser = User.create(result.current_user);
      return {
        InfoDetails: Info,
        primaryAddress: primaryAddress,
        currentUser: currentUser
      };
    }.bind(this), function(error) {
      return error;
    });
  }
});


export default Info;
