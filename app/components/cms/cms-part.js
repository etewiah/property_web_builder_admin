import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveBlocksContent: function(blocksContent) {
      var that = this;
      blocksContent.save().then(function(result){
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
  colClass: "col-sm-3",
  colBlocks: Ember.computed('blocksInfo', {
    get(key) {
      var colBlocks = [];
      var allBlocks = this.get("blocksContent.blocks");
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
          var rowBlock = allBlocks.findBy("identifier", rowsInfo.label) || {};
          rowBlock.info = rowsInfo;
          // below needs to be set directly on block 
          // so I can get it through strong_params on serverside
          rowBlock.is_image = rowsInfo.isImage;
          rowBlocks.push(rowBlock);
        });
        colBlocks.push(rowBlocks);
      });
      // debugger;
      return colBlocks;
    }
  })
});
