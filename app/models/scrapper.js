var Scapper = Ember.Object.extend({
});

Scapper.reopenClass({
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
  },
  // below will get metadata about different MLSs
  // getAll: function() {
  //   var apiUrl = "/api/v1/mls";
  //   return $.ajax(apiUrl, {
  //     type: 'GET',
  //     dataType: 'json',
  //     data: {}
  //   }).then(function(results) {
  //     // return Theme.create(results);
  //     return results;
  //   }.bind(this), function(error) {
  //     return error;
  //   });
  // }
});

export default Scapper;
