var PwbPage = Ember.Object.extend({


  fragmentConfigs: function() {
    var pageSetup = this.get("setup.fragment_configs") || [];
    // debugger;
    return pageSetup;
  }.property("setup"),
// fragment_configs

  // pageFragments: function() {
  //   return this.get("page_fragment_blocks") || [];
  // }.property("page_fragment_blocks"),

  // gets all uploaded images associated with this content so
  // a picker can be used to select which to use
  getLocaleFragmentContentPhotos: function(label){
    // var pageContentKey = this.get("slug") + "_" + label;
    var pageContents = this.get("page_contents");
    var pageContent = pageContents.findBy("content_fragment_key", label);
    if (pageContent) {
      return pageContent["content_photos"];
    } else {
      return "";
    }
  },

  getFragmentContent: function(label){
    // var pageContentKey = this.get("slug") + "_" + label;
    var pageContents = this.get("page_contents");
    var pageContent = pageContents.findBy("content_fragment_key", label) || {};
    return pageContent;
  },

  // getLocaleFragmentHtml: function(locale, label){
  //   // var pageContentKey = this.get("slug") + "_" + label;
  //   var pageContents = this.get("page_contents");
  //   var pageContent = pageContents.findBy("content_fragment_key", label);
  //   if (pageContent) {
  //     var contentKey = "raw_" + locale;
  //     return pageContent[contentKey];
  //   } else {
  //     return "";
  //   }
  // },

  getLocaleFragmentBlocks: function(locale, label){
    var pageFragments = this.get("page_fragment_blocks") || [];
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
    var fragmentDetailsJson = fragmentDetails.getProperties("blocks","locale","label");
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
    debugger;
    var data = {
      page_slug: pageSlug,
      cmd: cmd,
      page_fragment_label: pageFragmentLabel
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
