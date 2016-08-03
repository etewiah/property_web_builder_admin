// currently Tenant is returned along with agency details
// right now this is just for setting style variables
// aug 2016 - now also for social_media etc..
var Tenant = Ember.Object.extend({
  // https://dockyard.com/blog/2016/02/12/defaults-in-ember
  // social_media: attr('object', { defaultValue: {} }),

  // http://codebrief.com/2012/03/eight-ember-dot-js-gotchas-with-workarounds/
  init: function() {
    this._super();
    var socialMedia = this.get("social_media") || {};
    // needed because some tenants ended up with this set to null
    this.set('social_media', socialMedia);
  },

  save: function(complete, error) {
    var data = this.getProperties(Object.keys(this));
    // var data = {
    //   address: TenantProperties
    // };
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
