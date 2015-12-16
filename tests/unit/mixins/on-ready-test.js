import Ember from 'ember';
import OnReadyMixin from '../../../mixins/on-ready';
import { module, test } from 'qunit';

module('Unit | Mixin | on ready');

// Replace this with your real tests.
test('it works', function(assert) {
  var OnReadyObject = Ember.Object.extend(OnReadyMixin);
  var subject = OnReadyObject.create();
  assert.ok(subject);
});
