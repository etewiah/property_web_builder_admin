var PwbPage = Ember.Object.extend({

  save: function(complete, error) {
    var pageProperties = this.getProperties(Object.keys(this));
    var data = {
      page: pageProperties
    };
    // var self = this;
    var apiUrl = '/api/v1/pwb_page';
    return $.ajax(apiUrl, {
      type: 'PUT',
      dataType: 'json',
      data: data
    }).then(function(result) {
      if (complete) {
        complete(result);
      }
    }, function(result) {
      if (error) {
        error(result);
      }
    });
  },

});

PwbPage.reopenClass({
  get: function(pageSlug) {
    var apiUrl = "/api/v1/pwb_page/" + pageSlug;
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json'
    }).then(function(result) {
      return PwbPage.create(result);
      // return Ember.Object.create(result);
    }.bind(this), function(error) {
      return error;
    });
  },

});


export default PwbPage;
