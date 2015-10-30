var AdminTranslations = Ember.Object.extend({
  save: function(complete, error) {
    var data = {};
    data = this.getProperties( Object.keys(this) );
    var self = this;
    var apiUrl = '/api/v1/lang/admin_translations/' + data.id;
    return $.ajax(apiUrl, {
      type: 'POST',
      dataType: 'json',
      data: data
    }).then(function(result) {
      // self.set("geo", result);
      if (complete) {
        // self.set('posts', result.posts);
        complete(result);
      }
    }, function(result) {
      if (error) {
        error(result);
      }
    });
  },

});

AdminTranslations.reopenClass({
  get: function(batchKey) {
    var apiUrl = "/api/v1/lang/admin_translations/" + batchKey;
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json'
    }).then(function(results) {
      var adminTranslations = [];
      results.forEach(function(result){
        adminTranslations.push(AdminTranslations.create(result));
      })
      return adminTranslations;
      // return result;
    }.bind(this), function(error) {
      return error;
    });
  },
});


export default AdminTranslations;
