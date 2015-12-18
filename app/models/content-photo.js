
// can't get belongsTo r/n to work so just using normal object:
export default Ember.Object.extend({
  remove: function(complete, error) {
    var data = this.getProperties(["id", "content_id"]);
    var self = this;
    var apiUrl = '/api/v1/web_contents/photos/' + data.id ;
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

});
