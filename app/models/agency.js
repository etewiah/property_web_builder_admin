// import DS from 'ember-data';

var Agency = Ember.Object.extend({
  save: function(complete, error) {
    var agencyProperties = this.getProperties( Object.keys(this) );
    var data = {
      agency: agencyProperties
    };
    // debugger;
    var self = this;
    var apiUrl = '/api/v1/agency';
    return $.ajax(apiUrl, {
      type: 'PUT',
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

Agency.reopenClass({
  get: function() {
    var apiUrl = "/api/v1/agency";
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      // data: {
      //   field_names: fieldNames
      // }
    }).then(function(result) {
      return Agency.create(result);
      // return result;
    }.bind(this), function(error) {
      return error;
    });
  }
});


export default Agency;