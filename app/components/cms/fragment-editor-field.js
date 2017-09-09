import Ember from 'ember';

export default Ember.Component.extend({
  fragmentBlock: Ember.computed('blocksInfo', {
    get(key) {
      var currrentBlockInfoRow = this.get("currrentBlockInfoRow");
      // var blocksWithContent = this.get("blocksWithContent");
      // var block = blocksWithContent.blocks[currrentBlockInfoRow.label];
      var boundValues = this.get("boundValues");
      var boundValuesBlocks = this.get("boundValues.blocks") || {};
      // var block = null;
      var block = boundValuesBlocks[currrentBlockInfoRow.label];
      if (block) {
        return block;
      } else {
        block = {
          content: ""
        };
        boundValues.set("blocks." + currrentBlockInfoRow.label, block);
        // [currrentBlockInfoRow.label] = block;
        return boundValues.get("blocks." + currrentBlockInfoRow.label);
      }
    }
  })
});
