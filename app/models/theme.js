// july 2016: tried using ember store above but just too much
// work figuring out the promise object


var Theme = Ember.Object.extend({

});

Theme.reopenClass({
  getAll: function(fieldNames) {
    var apiUrl = "/api/v1/themes";
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: {
        field_names: fieldNames
      }
    }).then(function(result) {
      // return Theme.create(result);
      return result;
    }.bind(this), function(error) {
      return error;
    });
  }
});


export default Theme;
