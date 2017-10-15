import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    pickPhoto: function(photo) {
      this.set("fragmentBlock.content", photo.image.url);
    },
  },
  // find the intersection of the currrentBlockInfoRow (field in question)
  // and retrieve the content of that row from boundValuesBlocks
  fragmentBlock: Ember.computed('blocksInfo', 'currrentBlockInfoRow', {
    get(key) {
      var currrentBlockInfoRow = this.get("currrentBlockInfoRow");
      var boundValues = this.get("boundValues");
      var boundValuesBlocks = this.get("boundValues.blocks") || {};
      // var block = null;
      var blockWithContent = boundValuesBlocks[currrentBlockInfoRow.label];
      if (blockWithContent) {
        return blockWithContent;
      } else {
        // if there is no content for this row in boundValuesBlocks
        // we will create a placeholder
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
