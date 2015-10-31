import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('geo/gmap-searchresults', 'Integration | Component | geo/gmap searchresults', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(2);

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{geo/gmap-searchresults}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#geo/gmap-searchresults}}
      template block text
    {{/geo/gmap-searchresults}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
