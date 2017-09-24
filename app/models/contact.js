var Contact = Ember.Object.extend({
  saveNew: function(complete, error) {
    var newContactDetails = this.getProperties(Object.keys(this));
    var data = {
      details: newContactDetails
    };
    var self = this;
    var apiUrl = '/api/v1/contacts';
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

Contact.reopenClass({
  getSingle: function(contactId) {
    debugger;
    var apiUrl = "/api/v1/contacts/" + contactId.toString();
    // 
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: {}
    }).then(function(result) {
      return Contact.create(result);
      // return result;
    }.bind(this), function(error) {
      return error;
    });
  },
  getAll: function() {
    var apiUrl = "/api/v1/contacts";
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: {}
    }).then(function(result) {
      // return Contact.create(result);
      return result;
    }.bind(this), function(error) {
      return error;
    });
  }
});


export default Contact;
