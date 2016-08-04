import Ember from 'ember';

export default Ember.Component.extend({
  classNames: ['wysiwyg-editor'],
  btnSize: 'btn-xs',
  // height: 120,
  minHeight: 120,

  willDestroyElement: function() {
    this.$('textarea').destroy();
  },

  setupEditor: function() {
    var _this = this;
    var btnSize = this.get('btnSize');
    var minHeight = this.get('minHeight');

    // options here:
    // http://summernote.org/deep-dive/
    this.$('textarea').summernote({
      // height: height,
      // setting height above results in editor 
      // not auto expanding

      // minheight below does not seem to work
      // so used css to set it on .note-editable in _shame.scss
      minHeight: "200px",
      focus: true,
      toolbar: [
        ['style', ['bold', 'italic', 'underline', 'clear']],
        ['fontsize', ['fontsize']],
        ['color', ['color']],
        // ['para', ['ul', 'ol', 'paragraph']],
        // ['height', ['height']],
        ['insert', ['link']],
        // ['table', ['table']],
        // ['help', ['help']],
        ['codeview', ['codeview']]
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
