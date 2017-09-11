var PwbPage = Ember.Object.extend({

  pageFragments: function() {
    return this.get("page_fragments") || [];
  }.property("page_fragments"),

  getLocaleFragment: function(locale, label){
    var pageFragments = this.get("page_fragments") || [];
    var labeledFragments = pageFragments[label] || [];
    if (labeledFragments) {
      return labeledFragments[locale];
    } else {
      return {};
    }
  },

  save: function(complete, error) {
    var pageProperties = this.getProperties(Object.keys(this));
    var data = {
      page: pageProperties
    };
    // strong params on server ensures 
    // only a few fields will get updated
    var apiUrl = '/api/v1/pwb_page';
    return $.ajax(apiUrl, {
      type: 'PUT',
      dataType: 'json',
      data: data
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
  saveFragment: function(fragmentDetails, complete, error) {
    var pageSlug = this.get("slug");
    var fragmentDetailsJson = fragmentDetails.getProperties("blocks","locale","label");
    var data = {
      page_slug: pageSlug,
      fragment_details: fragmentDetailsJson
    };
    // var self = this;
    var apiUrl = '/api/v1/pwb_page/page_fragment';
    return $.ajax(apiUrl, {
      type: 'PUT',
      dataType: 'json',
      data: data
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
  setPagePartVisibility: function(visiblePageParts, complete, error) {
    var pageSlug = this.get("slug");
    var data = {
      page_slug: pageSlug,
      visible_page_parts: visiblePageParts
    };
    // var self = this;
    var apiUrl = '/api/v1/pwb_page/page_part_visibility';
    return $.ajax(apiUrl, {
      type: 'PUT',
      dataType: 'json',
      data: data
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

PwbPage.reopenClass({
  get: function(pageSlug) {
    var apiUrl = "/api/v1/pwb_page/" + pageSlug;
    return $.ajax(apiUrl, {
      type: 'GET',
      dataType: 'json'
    }).then(function(result) {
      return PwbPage.create(result);
      // return Ember.Object.create(result);
    }.bind(this), function(error) {
      return error;
    });
  },

});


export default PwbPage;
