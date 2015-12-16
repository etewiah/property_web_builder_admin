import Ember from 'ember';

import OnReadyMixin from "../../mixins/on-ready";
// all this just so the bs popover works..
export default Ember.Component.extend(OnReadyMixin, {
  // classNames: ['wysiwyg-editor'],
  // btnSize: 'btn-xs',
  // height: 120,

  // willDestroyElement: function() {
  //   this.$('textarea').destroy();
  // },

  // setupEditor: function() {
  //   // not entirely sure if I need this:
  //   // this._super();
  // }.on('didInsertElement'),

});
