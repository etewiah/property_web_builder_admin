// http://stackoverflow.com/questions/30697674/ember-transitiontoroute-cleanly-in-a-component-without-sendaction
// app/initializers/component-router-injector.js
export function initialize(container, application) {
  // Injects all Ember components with a router object:
  application.inject('component', 'router', 'router:main');
}

export default {
  name: 'component-router-injector',
  initialize: initialize
};