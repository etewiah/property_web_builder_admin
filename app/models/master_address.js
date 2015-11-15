// import DS from 'ember-data';
// this is for cross-tenant addresses
var MasterAddress = Ember.Object.extend({
  save: function(complete, error) {
    var MasterAddressProperties = this.getProperties( Object.keys(this) );
    var data = {
      address: MasterAddressProperties
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

MasterAddress.reopenClass({
  // retrieve via MasterAddress model
});


export default MasterAddress;
