import Ember from 'ember';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';
// http://stackoverflow.com/questions/27154886/ember-cli-where-to-reopen-framework-classes
import LinkComponent from './overrides/link-component';

var App;

Ember.MODEL_FACTORY_INJECTIONS = true;

console.log('App starting...');
App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

Ember.onerror = function(error) {
  console.error("Ember.onerror:", error);
};

console.log("Resolver:", Resolver);

loadInitializers(App, config.modulePrefix);


export default App;
