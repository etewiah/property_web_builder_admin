import {
  moduleForComponent, test
}
from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('forms/simple-select', 'Integration | Component | forms/simple select', {
  integration: true
});

test('it renders', function(assert) {
  assert.expect(1);
  var propertyResource = {
    "name": null,
    "idPropiedad": 6,
    "direccionPropiedad": "paseo de los castaños, 4",
    "zonaDireccion": "BOADILLA DEL MONTE",
    "titleEn": "Chalet in English...",
    "titleEs": null,
    "precioAntiguo": 0,
    "precioAlquiler": 0,
    "idOrigenPropiedad": 2,
    "precioTa": 0,
    "precioTm": 0,
    "precioTb": 0,
    "temporadas": false
  };
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
  this.set("fieldDetails", fieldDetails);
  this.set("propertyResource", propertyResource);
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });
  this.render(hbs `{{forms/simple-select propertyResource=propertyResource fieldDetails=fieldDetails}}`);

  assert.ok(this.$(".selectpicker").is(":hidden"));
  // assert.equal(this.$().text().trim(), '');

  // Template block usage:
  // this.render(hbs `
  //   {{#forms/simple-select}}
  //     template block text
  //   {{/forms/simple-select}}
  // `);

  // assert.equal(this.$().text().trim(), 'template block text');
});
