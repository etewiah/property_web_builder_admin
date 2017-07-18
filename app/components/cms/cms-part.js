import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveCmsPage: function(cmsPage) {
      var that = this;
      // in cases where locale had not been prepopulated
      // a new record will be created
      cmsPage.save().then(function(result) {
        var updatedCaches = result.get("updatedCaches") || [];
        if (updatedCaches.length > 0) {
          that.sendAction("updateCachesAction", updatedCaches);
        }
      });
      this.set("isEditing", false);
    },
    cancelEditing: function() {
      this.set("isEditing", false);
    },
  },
  colClass: Ember.computed('blocksInfo', {
    get(key) {
      var blocksInfo = this.get("blocksInfo") || [];
      if (blocksInfo.length === 3) {
        return "col-sm-4";
      }
      if (blocksInfo.length === 4) {
        return "col-sm-3";
      }
      return "col-sm-6";
    }
  }),
  colBlocks: Ember.computed('blocksInfo', {
    get(key) {
      // below is what is used in hbs to figure out how 
      // to display the editor sections
      var colBlocks = [];
      var allBlocks = this.get("cmsPage.blocks");
      // below allows me to create blocks that have not been
      // prepopulated on server:
      var newBlocks = [];
      var blocksInfo = this.get("blocksInfo") || [];
      // go through each item of meta info about a block
      // which is organized as an array of arrays
      blocksInfo.forEach(function(colsInfo) {
        var rowBlocks = [];
        // inner array represents columns
        colsInfo.forEach(function(rowsInfo) {
          // below will only work if a block corresponding to meta info
          // is found
          // TODO - find way to create block where it does not currently 
          // exist on server 
          var rowBlock = allBlocks.findBy("identifier", rowsInfo.label);
          if (!!!rowBlock) {
            // 
            rowBlock = {
              content: "",
              identifier: rowsInfo.label
            }
            newBlocks.pushObject(rowBlock);
          }
          rowBlock.info = rowsInfo;
          // below needs to be set directly on block 
          // so I can get it through strong_params on serverside
          rowBlock.is_image = rowsInfo.isImage;
          rowBlocks.push(rowBlock);
        });
        colBlocks.push(rowBlocks);
      });
      if (newBlocks.length > allBlocks.length) {
        this.set("cmsPage.blocks", newBlocks);
      }
      return colBlocks;
    }
  })
});
