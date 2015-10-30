var AdminMeta = Ember.Object.extend({
  // save: function(complete, error) {
  //   var data = {};
  //   data = this.getProperties( Object.keys(this) );

  //   var self = this;
  //   var apiUrl = '/api/v1/properties/update_AdminMeta';
  //   return $.ajax(apiUrl, {
  //     type: 'POST',
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

AdminMeta.reopenClass({
  getAdminTranslations: function(batchKey) {
    var apiUrl = "/api/v1/lang/admin_translations/" + batchKey;
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json'
    }).then(function(result) {
      // return AdminMeta.create(result);
      return result;
    }.bind(this), function(error) {
      return error;
    });
  },
  get: function(id) {
    var apiUrl = "/api/v1/lang/field_keys/" ;
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json'
    }).then(function(result) {
      return AdminMeta.create(result);
      // return result;
    }.bind(this), function(error) {
      return error;
    });
  }
});


export default AdminMeta;
