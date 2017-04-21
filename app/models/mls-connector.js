// TODO - rename file to select_values

var MlsConnector = Ember.Object.extend({


});

MlsConnector.reopenClass({
  createProperties: function(properties, complete, error) {
    var apiUrl = "/api/v1/properties/bulk_create";
    var propertiesJSON = JSON.stringify(properties);
    return $.ajax(apiUrl, {
      type: 'POST',
      dataType: 'json',
      data: {
        propertiesJSON: propertiesJSON
      }
    }).then(function(result) {
      if (complete) {
        complete(result);
      }
    }.bind(this), function(result) {
      if (error) {
        error(result);
      }
    });
  },
  getProperties: function(mlsDetails, complete, error) {
    var apiUrl = "/import/mls";
    // just noticed that the data below gets sent as a querystring:
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: mlsDetails
    }).then(function(result) {
      if (complete) {
        complete(result);
      }
    }.bind(this), function(result) {
      if (error) {
        error(result);
      }
    });
  },
  // below will get metadata about different MLSs
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
