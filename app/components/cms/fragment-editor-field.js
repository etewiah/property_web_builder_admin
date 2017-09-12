import Ember from 'ember';

export default Ember.Component.extend({
  fragmentBlock: Ember.computed('blocksInfo', {
    get(key) {
      var currrentBlockInfoRow = this.get("currrentBlockInfoRow");
      var boundValues = this.get("boundValues");
      var boundValuesBlocks = this.get("boundValues.blocks") || {};
      // var block = null;
      var blockWithContent = boundValuesBlocks[currrentBlockInfoRow.label];
      if (blockWithContent) {
        return blockWithContent;
      } else {
        blockWithContent = {
          content: ""
        };
        boundValues.set("blocks." + currrentBlockInfoRow.label, blockWithContent);
        // [currrentBlockInfoRow.label] = block;
        return boundValues.get("blocks." + currrentBlockInfoRow.label);
      }
    }
  })
});
