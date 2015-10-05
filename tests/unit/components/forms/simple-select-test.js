import {
  moduleForComponent, test
}
from 'ember-qunit';

moduleForComponent('forms/simple-select', 'Unit | Component | forms/simple select', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar'],
  unit: true
});

test('it renders', function(assert) {
  assert.expect(1);
  var propertyResource = {};
  var fieldDetails = {
    labelText: "Temporadas:",
    tooltipText: "",
    fieldName: "temporadas",
    fieldType: "simpleSelect",
    fieldDbType: "boolean",
    options: [{
      value: 1,
      titleKey: "Si"
    }, {
      value: 0,
      titleKey: "No"
    }]
  };


  // Creates the component instance
  var component = this.subject();
  component.set("fieldDetails", fieldDetails);

  // Renders the component to the page
  this.render();

  assert.ok(this.$(".selectpicker").is(":hidden"));
  // assert.equal(this.$().text().trim(), '');
});
