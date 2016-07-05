// import DS from 'ember-data';

// export default DS.Model.extend({

//   title: DS.attr()

// });

// july 2016: tried using ember store above but just too much
// work figuring out the promise object


var SiteTemplate = Ember.Object.extend({

});

SiteTemplate.reopenClass({
  getAll: function(fieldNames) {
    var apiUrl = "/api/v1/site-templates";
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: {
        field_names: fieldNames
      }
    }).then(function(result) {
      return SiteTemplate.create(result);
      // return result;
    }.bind(this), function(error) {
      return error;
    });
  }
});


export default SiteTemplate;
