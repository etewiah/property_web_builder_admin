// https://github.com/ember-cli/ember-cli/issues/4879
// import { moduleForModel, test } from 'ember-qunit';
import { moduleFor, test } from 'ember-qunit';

// moduleForModel('property', 'Unit | Serializer | property', {
moduleFor('property', 'Unit | Serializer | property', {
  // Specify the other units that are required for this test.
  needs: ['serializer:property']
});

// Replace this with your real tests.
skip('it serializes records', function(assert) {
  var record = this.subject();

  var serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});


