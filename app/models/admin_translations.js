var AdminTranslations = Ember.Object.extend({
  // Though I only pass the id for one translation, on the server side
  // all translations with the i18n key will be deleted
  // not a great implementation - will need to revisit
  delete: function(complete, error) {
    var data = this.getProperties(["locale", "i18n_value", "i18n_key", "batch_key"]);
    // data = this.getProperties( Object.keys(this) );
    var self = this;
    var apiUrl = '/api/v1/lang/admin_translations/' + data.id;
    return $.ajax(apiUrl, {
      type: 'DELETE',
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
  create: function(complete, error) {
    var data = {};
    data = this.getProperties( Object.keys(this) );
    var self = this;
    var apiUrl = '/api/v1/lang/admin_translations';
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
    }).then(function(result) {
      var adminTranslations = { translations: [] };
      result.translations.forEach(function(translation){
        adminTranslations.translations.push(AdminTranslations.create(translation));
      });
      adminTranslations.i18nKeyPrefix = result.prefix;
      adminTranslations.batchKey = result.batch_key;
      return adminTranslations;
      // return result;
    }.bind(this), function(error) {
      return error;
    });
  },
});


export default AdminTranslations;
