import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['wysiwyg-editor'],
  btnSize: 'btn-xs',
  height: 120,

  willDestroyElement: function() {
    this.$('textarea').destroy();
  },

  setupEditor: function() {
    var _this = this;
    var btnSize = this.get('btnSize');
    var height = this.get('height');

    this.$('textarea').summernote({
      height: height,
      toolbar: [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['fontsize', ['fontsize']],
        ['color', ['color']],
        ['para', ['ul', 'ol', 'paragraph']],
        ['height', ['height']],
        ['insert', ['link']],
        ['table', ['table']],
        ['help', ['help']]
      ]
    });

    var content = this.get('content');
    this.$('textarea').code(content);
    this.$('.btn').addClass(btnSize);
  }.on('didInsertElement'),
  
  keyUp: function() {
    this.doUpdate();
  },

  click: function() {
    this.doUpdate();
  },

  doUpdate: function() {
    var content = this.$('.note-editable').html();
    this.set('content', content);
  }
});
