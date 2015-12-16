import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),

  actions: {
    hideProperty: function(property){
      debugger;
    }
  },

  setupEditor: function() {
    $('.datatables').dataTable({
      "language": {
        "sProcessing": "Procesando...",
        "sLengthMenu": "Mostrar _MENU_ registros",
        "sZeroRecords": "No se encontraron resultados",
        "sEmptyTable": "Ningún dato disponible en esta tabla",
        "sInfo": this.get("i18n").t("datatables.sInfo").string,
        "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0 registros",
        "sInfoFiltered": "(filtrado de un total de _MAX_ registros)",
        "sInfoPostFix": "",
        "sSearch": this.get("i18n").t("datatables.sSearch").string + ":",
        "sUrl": "",
        "sInfoThousands": ",",
        "sLoadingRecords": this.get("i18n").t("datatables.sLoadingRecords").string,
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
