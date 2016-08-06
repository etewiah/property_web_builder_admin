import Ember from 'ember';
// based on 
// https://github.com/vsymguysung/ember-cli-summernote/blob/master/addon/components/summer-note.js
export default Ember.Component.extend({
  classNames: ['wysiwyg-editor'],
  btnSize: 'btn-xs',
  // height: 120,

  toolbar: function() {
    if (this.get("toolbarIn") === "hidden") {
      return false;
    }
    return [
      ['style', ['bold', 'italic', 'underline', 'clear']],
      ['fontsize', ['fontsize']],
      ['color', ['color']],
      // ['para', ['ul', 'ol', 'paragraph']],
      // ['height', ['height']],
      ['insert', ['link']],
      // ['table', ['table']],
      // ['help', ['help']],
      ['codeview', ['codeview']]
    ];
  }.property("toolbarIn"),

  willDestroyElement: function() {
    this.$('#summernote').summernote('destroy');
    // this.$('#summernote').destroy();
  },

  // var content = this.get('content');
  setupEditor: function() {
    var _this = this;
    var btnSize = this.get('btnSize');
    var toolbar = this.get('toolbar');

    // options here:
    // http://summernote.org/deep-dive/
    this.$('#summernote').summernote({
      // height: height,
      // setting height above results in editor 
      // not auto expanding

      // minheight below does not seem to work
      // so used css to set it on .note-editable in _shame.scss
      // minHeight: "200px",
      focus: true,
      toolbar: toolbar,
      // code: content
    });



    // this.$('#summernote').code(content);
    // above was for v 0.6.16
    // this.$('#summernote').summernote('code', content);
    // above would be for v 0.8... but seems to pick
    // up content in textbox anyway

    this.$('.btn').addClass(btnSize);
  }.on('didInsertElement'),

  keyUp: function() {
    this.doUpdate();
  },

  click: function() {
    this.doUpdate();
  },

  doUpdate: function() {
    // var content = this.$('.note-editable').html();
    // debugger;
    var content = this.$('#summernote').summernote('code');
    this.set('content', content);
  }
});
