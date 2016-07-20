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
  // save: function(complete, error) {
  //   var data = {};
  //   data = this.getProperties( Object.keys(this) );
  //   var self = this;
  //   var apiUrl = '/api/v1/lang/admin_translations/' + data.id;
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
  save: function(complete, error) {
    // when I save a translation client side
    // on server, a duplicate translation with a field_key unique to 
    // the current tenant gets created
    var apiUrl = '/api/v1/lang/admin_translations/' + this.get("id") + '/duplicate_for_tenant';
    // id above actually does not get used
    this.postWithUrl(apiUrl, complete, error);
  },
  addLocaleToExisting: function(complete, error) {
    this.postWithUrl('/api/v1/lang/admin_translations/add_locale_translation', complete, error);
  },
  create: function(complete, error) {
    this.postWithUrl('/api/v1/lang/admin_translations', complete, error);
  },
  postWithUrl: function(apiUrl, complete, error) {
    var data = {};
    data = this.getProperties(Object.keys(this));
    var self = this;
    var apiUrl = apiUrl;

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
      result.translations.forEach(function(translation) {
        adminTranslations.translations.push(AdminTranslations.create(translation));
      });
      // below no longer in use
      // adminTranslations.i18nKeyPrefix = result.prefix;
      adminTranslations.batchKey = result.batch_key;
      return adminTranslations;
      // return result;
    }.bind(this), function(error) {
      return error;
    });
  },
});


export default AdminTranslations;
