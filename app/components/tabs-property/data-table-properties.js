import Ember from 'ember';

export default Ember.Component.extend({
  i18n: Ember.inject.service(),
  // changeCount: 1,
  showingVisibleProperties: function() {
    return this.get("propertiesStatus") === "visible";
  }.property(),
  // propertiesToList: function(){
  //   var properties = this.get("properties");
  //   if (this.get("propertiesStatus") === "visible") {
  //     return properties.filterBy("visible", true);
  //   } else{
  //     return properties.filterBy("visible", false);
  //   }
  // }.property("properties", "properties.[].visible","changeCount"),

  actions: {
    hideProperty: function(property) {
      this.sendAction("hidePropertyAction", property);
    },
    unHideProperty: function(property, target) {
      property.set("visible", true);
      // this.set("properties", []);
      // this.rerender();
      property.save().then(
        function(result) {
          var properties = this.get("properties");
          var datatableApi = $('.datatables').dataTable().api();
          // TODO - improve below by replacing id with a friendly calculated property
          datatableApi.row("#" + result.get("id")).remove().draw();

          // var changeCount = this.get("changeCount");
          // this.set("changeCount", changeCount + 1);
          // this.rerender();
        }.bind(this));
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
