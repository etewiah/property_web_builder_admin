var Website = Ember.Object.extend({
  // https://dockyard.com/blog/2016/02/12/defaults-in-ember
  // social_media: attr('object', { defaultValue: {} }),

  // http://codebrief.com/2012/03/eight-ember-dot-js-gotchas-with-workarounds/
  // init: function() {
  //   this._super();
  //   var socialMedia = this.get("social_media") || {};
  //   // needed because some websites ended up with this set to null
  //   this.set('social_media', socialMedia);
  // },

  save: function(complete, error) {
    var websiteProperties = this.getProperties( Object.keys(this) );
    var data = {
      website: websiteProperties
    };

    var self = this;
    var apiUrl = '/api/v1/website';
    return $.ajax(apiUrl, {
      type: 'PUT',
      dataType: 'json',
      data: data
    }).then(function(result) {
      // self.set("geo", result);
      if (complete) {
        // self.set('posts', result.posts);
        complete(result);
      }
    }, function(result) {
      if (error) {
        error(result);
      }
    });
  },

});

Website.reopenClass({
  // retrieve via Website model
});


export default Website;
