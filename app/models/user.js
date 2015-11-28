// import DS from 'ember-data';
// currently user is returned along with agency details
var User = Ember.Object.extend({
  save: function(complete, error) {
    var UserProperties = this.getProperties( Object.keys(this) );
    var data = {
      address: UserProperties
    };
    // debugger;
    var self = this;
    var apiUrl = '/api/v1/master_address';
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

User.reopenClass({
  // retrieve via User model
});


export default User;
