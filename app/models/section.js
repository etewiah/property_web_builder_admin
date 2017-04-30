import DS from 'ember-data';

// export default DS.Model.extend({

//   linkPath: DS.attr(),
//   linkKey: DS.attr(),
//   visible: DS.attr(),
//   sortOrder: DS.attr(),
//   // below for content like carousel where each item only has 1 photo
//   primaryPhotoModel: Ember.computed('contentPhotos', function() {
//     var contentPhotos = this.get("contentPhotos") || [];
//     return ContentPhoto.create(contentPhotos[0]);
//   }),
// });
// apr 2017 - can't get jsonapi to work so changing from above to below
var Section = Ember.Object.extend({
  rollbackAttributes: function(){
    this.set("items", this.get("pristineItems").copy("deep"));
    // debugger;
  },
  save: function(complete, error) {
    // var data = this.getProperties(Object.keys(this));
    var itemsString = JSON.stringify(this.get("items"));
    // rails isn't very good about being passed json arrays
    // so sending string to be parsed server side
    var self = this;

    var apiUrl = '/api/v1/sections';
    return $.ajax(apiUrl, {
      type: 'PUT',
      dataType: 'json',
      data: {
        items: itemsString
      }
    }).then(function(result) {
      if (complete) {
        complete(result);
      }
    }, function(result) {
      if (error) {
        error(result);
      }
    });
  },

});

Section.reopenClass({
  getAll: function(fieldNames) {
    var apiUrl = "/api/v1/sections";
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: {
        field_names: fieldNames
      }
    }).then(function(result) {
      // debugger;
      return Section.create({
        items: result.sortBy("sort_order"),
        pristineItems: result.copy(true)
      });
      // return result;
    }.bind(this), function(error) {
      return error;
    });
  }
});


export default Section;
