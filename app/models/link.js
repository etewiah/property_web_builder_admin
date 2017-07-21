var Link = Ember.Object.extend({
  // might need to rename Link to NavItems (plural)
  rollbackAttributes: function() {
    // this allows me to cancel changes in form
    this.set("top_nav_links", this.get("pristineItems.top_nav_links").copy("deep"));
    this.set("footer_links", this.get("pristineItems.footer_links").copy("deep"));
  },
  // this is not like a normal save where I only update a single item
  save: function(complete, error) {
    var self = this;
    var linkGroups = this.getProperties("footer_links", "top_nav_links");
    var linkGroupsString = JSON.stringify(linkGroups);
    // rails isn't very good about being passed json arrays
    // so sending string to be parsed server side
    // - also saves me messing about too much with strong params

    var apiUrl = '/api/v1/links';
    return $.ajax(apiUrl, {
      type: 'PUT',
      dataType: 'json',
      data: {
        linkGroups: linkGroupsString
      }
    }).then(function(result) {
      // var sortedItems = result.sortBy("sort_order");
      // // below has to be a deep copy so that changes to the original
      // // does not change them
      // self.set("pristineItems", sortedItems.copy(true));
      var pristineItems = {
        top_nav_links: linkGroups.top_nav_links.copy(true),
        footer_links: linkGroups.footer_links.copy(true)
      }
      self.set("pristineItems", pristineItems);
      if (complete) {
        complete(result);
      }
    }, function(result) {
      if (error) {
        error(result);
      }
    });
  },

  topNavLinks: function() {
    return this.get("top_nav_links");
  }.property("top_nav_links"),

  footerLinks: function() {
    return this.get("footer_links");
  }.property("footer_links"),
});

Link.reopenClass({
  getAll: function(locale) {
    var apiUrl = "/api/v1/links";
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json',
      data: {
        locale: locale
      }
    }).then(function(result) {
      var links = Link.create(result);
      var pristineItems = {
        top_nav_links: result.top_nav_links.copy(true),
        footer_links: result.footer_links.copy(true)
      }
      links.set("pristineItems", pristineItems);
      return links;
    }.bind(this), function(error) {
      return error;
    });
  }
});


export default Link;
