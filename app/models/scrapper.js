// TODO - rename as property-importer
// and merge with mls-connector
var Scapper = Ember.Object.extend({});

Scapper.reopenClass({
  getFromApi: function(websiteDetails, complete, error) {
    var apiUrl = "/import/scrapper/from_api";
    // just noticed that the data below gets sent as a querystring:
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: websiteDetails
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
  getProperties: function(websiteDetails, complete, error) {
    var apiUrl = "/import/scrapper";
    // just noticed that the data below gets sent as a querystring:
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: websiteDetails
    }).then(function(result) {
      if (complete) {
        complete(result);
      }
    }.bind(this), function(result) {
      if (error) {
        error(result);
      }
    });
  }
});

export default Scapper;
