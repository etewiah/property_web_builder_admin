// TODO - rename file to select_values

var SelectValues = Ember.Object.extend({


});

SelectValues.reopenClass({
  get: function(fieldNames) {
    var apiUrl = "/api/v1/select_values/" ;
    // eg
    // http://localhost:3000/api/v1/select_values/?field_names=property-origins%2C+property-types%2C+property-states%2C+property-labels
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: {
        field_names: fieldNames
      }
    }).then(function(result) {
      return SelectValues.create(result);
      // return result;
    }.bind(this), function(error) {
      return error;
    });
  }
});


export default SelectValues;
