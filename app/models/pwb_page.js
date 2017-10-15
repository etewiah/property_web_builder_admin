var PwbPage = Ember.Object.extend({


  // fragmentConfigs: function() {
  //   var pageSetup = this.get("setup.fragment_configs") || [];
  //   return pageSetup;
  // }.property("setup"),

  // below used to figure out how to layout editor etc
  getPagePart: function(pagePartFragmentKey) {
    var pagePart = this.get("page_parts").findBy("page_part_key", pagePartFragmentKey) || null;
    return pagePart;
  },

  // used for tabs under each page
  pageParts: function() {
    // TODO - filter and sort
    var pageParts = this.get("page_parts");
    return pageParts;
  }.property("page_parts"),

  // pageFragments: function() {
  //   return this.get("page_fragment_blocks") || [];
  // }.property("page_fragment_blocks"),

  // gets all uploaded images associated with this content so
  // a picker can be used to select which to use
  getLocaleFragmentContentPhotos: function(page_part_key){
    // var pageContentKey = this.get("slug") + "_" + page_part_key;
    var pageContents = this.get("page_contents");
    var pageContent = pageContents.findBy("content_page_part_key", page_part_key);
    if (pageContent) {
      return pageContent["content_photos"];
    } else {
      return "";
    }
  },

  getFragmentContent: function(page_part_key){
    // var pageContentKey = this.get("slug") + "_" + page_part_key;
    var pageContents = this.get("page_contents");
    var pageContent = pageContents.findBy("content_page_part_key", page_part_key) || {};
    return pageContent;
  },

  // getLocaleFragmentBlocks: function(locale, label){
  //   var pageFragments = this.get("page_fragment_blocks") || [];
  //   var labeledFragments = pageFragments[label] || [];
  //   if (labeledFragments) {
  //     return labeledFragments[locale];
  //   } else {
  //     return {};
  //   }
  // },

  save: function(complete, error) {
    var pageProperties = this.getProperties(Object.keys(this));
    var data = {
      page: pageProperties
    };
    // strong params on server ensures 
    // only a few fields will get updated
    var apiUrl = '/api/v1/pages';
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
    var fragmentDetailsJson = fragmentDetails.getProperties("blocks","locale","page_part_key");
    var data = {
      page_slug: pageSlug,
      fragment_details: fragmentDetailsJson
    };
    // var self = this;
    var apiUrl = '/api/v1/pages/page_fragment';
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
  setPagePartVisibility: function(pageFragmentLabel, cmd, complete, error) {
    var pageSlug = this.get("slug");
    var data = {
      page_slug: pageSlug,
      cmd: cmd,
      page_part_key: pageFragmentLabel
      // visible_page_parts: visiblePageParts
    };
    // var self = this;
    var apiUrl = '/api/v1/pages/page_part_visibility';
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
    var apiUrl = "/api/v1/pages/" + pageSlug;
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
