// TODO - rename file to select_values

var SelectValues = Ember.Object.extend({


});

SelectValues.reopenClass({
  get: function(fieldNames) {
    var apiUrl = "/api/v1/lang/field_keys/" ;
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
