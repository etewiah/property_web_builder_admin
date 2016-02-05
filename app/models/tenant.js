// currently Tenant is returned along with agency details
// right now this is just for setting style variables
var Tenant = Ember.Object.extend({
  save: function(complete, error) {
    var data = this.getProperties( Object.keys(this) );
    // var data = {
    //   address: TenantProperties
    // };
    debugger;
    var self = this;
    var apiUrl = '/api/v1/tenant';
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

Tenant.reopenClass({
  // retrieve via Tenant model
});


export default Tenant;
