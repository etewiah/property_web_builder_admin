// TODO - rename file to select_values

var MlsConnector = Ember.Object.extend({


});

MlsConnector.reopenClass({
  getProperties: function(fieldNames,complete) {
    var apiUrl = "/import/mls_exp";
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: {
        field_names: fieldNames
      }
    }).then(function(result) {
      // debugger;
      // return MlsConnector.create(result);
      if (complete) {
        complete(result);
      }
    }.bind(this), function(error) {
      return error;
    });
  }
});


export default MlsConnector;
