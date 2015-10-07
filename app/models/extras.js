var Extras = Ember.Object.extend({
  save: function(complete, error) {
    var data = {};
    data = this.getProperties( Object.keys(this) );

    var self = this;
    var apiUrl = '/api/v1/properties/update_extras';
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

Extras.reopenClass({
  get: function(id) {
    var apiUrl = "/api/v1/properties/" + id + "/get_extras";
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json'
    }).then(function(result) {
      return Extras.create(result);
      // return result;
    }.bind(this), function(error) {
      return error;
    });
  }
});


export default Extras;
