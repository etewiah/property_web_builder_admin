// 
//TODO - add getInfo method that replaces current info.js model


var AdminMeta = Ember.Object.extend({


});

AdminMeta.reopenClass({

  // TODO - rename below to getSelectValues
  get: function(fieldNames) {
    var apiUrl = "/api/v1/select_values/";
    // eg
    // http://localhost:3000/api/v1/select_values/?field_names=property-origins%2C+property-types%2C+property-states%2C+property-labels
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: {
        field_names: fieldNames
      }
    }).then(function(result) {
      return Ember.Object.create(result);
      // return result;
    }.bind(this), function(error) {
      return error;
    });
  }
});


export default AdminMeta;
