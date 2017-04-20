import DS from 'ember-data';

export default DS.Transform.extend({
  deserialize: function(serialized) {
    var underscoredExtras = {};
    Object.keys(serialized).forEach(function(key){
      underscoredExtras[key.replace(/\./g,"_")] = serialized[key];
      // debugger;
    });
    // debugger;
    return underscoredExtras;
  },

  serialize: function(deserialized) {
    debugger;
    // apr 2017 - can be removed??
    return deserialized * 100;
  }
});

