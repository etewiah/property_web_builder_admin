import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    saveBlocksContent: function(blocksContent) {
      blocksContent.save();
      this.set("isEditing", false);
    },
    cancelEditing: function() {
      this.set("isEditing", false);
    },
  },

  colBlocks: Ember.computed('blocksInfo', {
    get(key) {
      var colBlocks = [];
      var allBlocks = this.get("blocksContent.blocks");
      var blocksInfo = this.get("blocksInfo") || [];

      blocksInfo.forEach(function(colsInfo) {
        var rowBlocks = [];
        colsInfo.forEach(function(rowsInfo) {
          var rowBlock = allBlocks.findBy("identifier", rowsInfo.label);
          rowBlocks.push(rowBlock);
        });
        colBlocks.push(rowBlocks);
      });
      return colBlocks;
    }
  })
});
