import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('start', function() {
    this.route('inicio');
  });

  this.route('user');
});

export default Router;
