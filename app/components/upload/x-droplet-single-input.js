import Ember from 'ember';

export default Ember.Component.extend(Droplet.SingleInput, {

  /**
   * @property tagName
   * @type {String}
   */
  tagName: 'input',
  // tagName: 'div',

  /**
   * @property classNames
   * @type {String}
   */
  classNames: 'files',

  /**
   * @property attributeBindings
   * @type {Array}
   */
  attributeBindings: ['disabled', 'name', 'type', 'multiple'],

  /**
   * @property file
   * @type {String}
   */
  type: 'file',
});
