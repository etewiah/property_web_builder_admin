// const { Service, inject } = Ember;

var AdminTranslations = Ember.Object.extend({

  // i18n: inject.service(),

  // Though I only pass the id for one translation, on the server side
  // all translations with the i18n key will be deleted
  // not a great implementation - will need to revisit
  delete: function(complete, error) {
    var data = this.getProperties(["locale", "i18n_value", "i18n_key", "batch_key"]);
    // data = this.getProperties( Object.keys(this) );
    var self = this;
    var apiUrl = '/api/v1/translations/' + data.id;
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
  //   var apiUrl = '/api/v1/translations/' + data.id;
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
    var apiUrl = '/api/v1/translations/' + this.get("id") + '/update_for_locale';

      // TODO - for translations like "extras" which get used elsewhere in admin ui
      // need to refetch them for i18n
    this.sendData('PUT', apiUrl, complete, error);
  },
  addLocaleToExisting: function(complete, error) {
    this.sendData('POST', '/api/v1/translations/create_for_locale', complete, error);
  },
  create: function(complete, error) {
    this.sendData('POST', '/api/v1/translations', complete, error);
  },
  sendData: function(ajaxType, apiUrl, complete, error) {
    var data = {};
    data = this.getProperties(Object.keys(this));
    var self = this;
    var apiUrl = apiUrl;
    return $.ajax(apiUrl, {
      type: ajaxType,
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
    var apiUrl = "/api/v1/translations/batch/" + batchKey;
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
