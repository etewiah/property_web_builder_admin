import Ember from 'ember';

export default Ember.Component.extend({
  // classNames: ['wysiwyg-editor'],
  // btnSize: 'btn-xs',
  // height: 120,

  // willDestroyElement: function() {
  //   this.$('textarea').destroy();
  // },
  // properties: function(){
  //   debugger;
  // }.property(),

  setupEditor: function() {
    $('.datatables').dataTable({
      "language": {
        "sProcessing": "Procesando...",
        "sLengthMenu": "Mostrar _MENU_ registros",
        "sZeroRecords": "No se encontraron resultados",
        "sEmptyTable": "Ningún dato disponible en esta tabla",
        "sInfo": "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
        "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
        "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix": "",
        "sSearch": "Buscar:",
        "sUrl": "",
        "sInfoThousands": ",",
        "sLoadingRecords": "Cargando...",
        "oPaginate": {
          "sFirst": "<<",
          "sLast": ">>",
          "sNext": ">",
          "sPrevious": "<"
        },
        "oAria": {
          "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
          "sSortDescending": ": Activar para ordenar la columna de manera descendente"
        }
      }
    });
    // not entirely sure if I need this:
    // this._super();
  }.on('didInsertElement'),

});
