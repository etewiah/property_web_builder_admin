// import DS from 'ember-data';

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
// apr 2017 - on serverside default jsonapi index action returns nothing
 // so using Ember.Object instead of DS.Model which works with jsonapi..
var Section = Ember.Object.extend({
// might need to rename Section to NavItems (plural)
  rollbackAttributes: function(){
    // this allows me to cancel changes in form
    this.set("items", this.get("pristineItems").copy("deep"));
  },
  save: function(complete, error) {
    // this is not like a normal save where I only update a single item
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
      // console.log(self);
      var sortedItems = result.sortBy("sort_order");
      // below has to be a deep copy so that changes to the original
      // does not change them
      self.set("pristineItems", sortedItems.copy(true));
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
      var sortedItems = result.sortBy("sort_order");
      // debugger;
      return Section.create({
        items: sortedItems,
        pristineItems: sortedItems.copy(true)
      });
      // return result;
    }.bind(this), function(error) {
      return error;
    });
  }
});


export default Section;
