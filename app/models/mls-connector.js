// TODO - rename file to select_values

var MlsConnector = Ember.Object.extend({


});

MlsConnector.reopenClass({
  getProperties: function(mlsDetails,complete,error) {
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
  }
});


export default MlsConnector;
