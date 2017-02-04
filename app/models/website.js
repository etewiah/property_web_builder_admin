var Website = Ember.Object.extend({
  // https://dockyard.com/blog/2016/02/12/defaults-in-ember
  // social_media: attr('object', { defaultValue: {} }),

  // http://codebrief.com/2012/03/eight-ember-dot-js-gotchas-with-workarounds/
  init: function() {
    this._super();
    // checks in case values have not been set on server
    // with default seeding rare but possible
    var socialMedia = this.get("social_media") || {};
    this.set('social_media', socialMedia);

    var supportedLocales = this.get('supported_locales') || ["en-UK"];
    var sl_without_variants = [];
    if (supportedLocales.length < 1) {
      // in case an empty array is returned from the server
      supportedLocales = ["en-UK"];
    }
    supportedLocales.forEach(function(locale){
      sl_without_variants.push(locale.split("-")[0]);
    });
    this.set('sl_without_variants', sl_without_variants);
    this.set('supported_locales', supportedLocales);
  },

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
