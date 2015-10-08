import Ember from 'ember';
import Extras from '../../../../models/extras';

export default Ember.Route.extend({
  // tabsList: [{}],
  beforeModel: function(){
      this.transitionTo("admin.propiedades.editar.tab", "general")
  },
});
