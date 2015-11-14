// import DS from 'ember-data';

var Agency = Ember.Object.extend({


});

Agency.reopenClass({
  get: function(fieldNames) {
    var apiUrl = "/api/v1/agencies/1";
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      // data: {
      //   field_names: fieldNames
      // }
    }).then(function(result) {
      debugger;
      return Agency.create(result);
      // return result;
    }.bind(this), function(error) {
      return error;
    });
  }
});


export default Agency;
