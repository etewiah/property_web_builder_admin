export function initialize(container, application) {

  // not quite sure where might have been a better place to set this:
  // $.cookie.defaults.path = "/";

  application.inject('route', 'configObject', 'service:configObject');
  application.inject('controller', 'configObject', 'service:configObject');

  // Injecting into models does not seem to work - at least I cn't retrieve from topic model
  // http://guides.emberjs.com/v1.10.0/understanding-ember/dependency-injection-and-service-lookup/
  // above mentions something about MODEL_FACTORY_INJECTIONS
  // Thinking about it though, if I am using the user model in the service
  // then injecting this service into all models could create a problem..
  // application.inject('model', 'configObject', 'service:configObject');

  // http://eclips3.net/2014/08/07/ember-rsvp-errors-swallowed/
  // Ember.RSVP.on('error', function(reason) {
  //   console.group('Ember.RSVP error:');
  //   console.info(reason);
  //   console.groupEnd();
  //   // /Users/etewiah/Ed/sites-2014-aug/discourse_4_chatty_maps/app/views/common/_discourse_javascript.html.erb
  //   // below should bubble it up to logster
  //   window.onerror(reason && reason.message, null, null, null, reason);
  // });

}

export default {
  name: 'config-object-injector',
  initialize: initialize
};
