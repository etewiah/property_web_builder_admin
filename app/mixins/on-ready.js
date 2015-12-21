import Ember from 'ember';

export default Ember.Mixin.create({
  onReady: function() {
    // for tooltips on "Properties list etc"
    $('[data-toggle="tooltip"]').tooltip();
    // from
    // /Users/etewiah/Documents/Ed/inmolite4/js/functions.js
    // 
    if ($('.fg-line')[0]) {
      $('body').on('focus', '.form-control', function() {
        $(this).closest('.fg-line').addClass('fg-toggled');
      })

      $('body').on('blur', '.form-control', function() {
        var p = $(this).closest('.form-group');
        var i = p.find('.form-control').val();

        if (p.hasClass('fg-float')) {
          if (i.length == 0) {
            $(this).closest('.fg-line').removeClass('fg-toggled');
          }
        } else {
          $(this).closest('.fg-line').removeClass('fg-toggled');
        }
      });
    }

    //Add blue border for pre-valued fg-flot text feilds
    if ($('.fg-float')[0]) {
      $('.fg-float .form-control').each(function() {
        var i = $(this).val();

        if (!i.length == 0) {
          $(this).closest('.fg-line').addClass('fg-toggled');
        }

      });
    }
    // not entirely sure if I need this:
    this._super();
  }.on('didInsertElement'),

});
