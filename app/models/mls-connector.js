// TODO - rename file to select_values

var MlsConnector = Ember.Object.extend({


});

MlsConnector.reopenClass({
  getProperties: function(mlsDetails, complete, error) {
    var apiUrl = "/import/mls";
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: {
        mls_details: mlsDetails
      }
    }).then(function(result) {
      // debugger;
      // return MlsConnector.create(result);
      if (complete) {
        complete(result);
      }
    }.bind(this), function(result) {
      if (error) {
        error(result);
      }
    });
  },
  getAll: function() {
    var apiUrl = "/api/v1/mls";
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: {}
    }).then(function(results) {
      // return Theme.create(results);
      return results;
    }.bind(this), function(error) {
      return error;
    });
  }
});

export default MlsConnector;
