import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('start', function() {
    this.route("default", {
      path: "/"
    });
    this.route('inicio');
    this.route("properties", function() {
      this.route("default", {
        path: "/"
      });
      // this.route("property", {
      //   path: "/:ref"
      // });
      this.route("property", {
        path: '/:ref'
      }, function() {
        this.route("default", {
          path: "/"
        });
        this.route("tab", {
          path: "/:tab"
        });
      });
    });

  });
  this.route('admin', function() {
    this.route("default", {
      path: "/"
    });
    this.route('inicio');
    this.route("propiedades", function() {
      this.route("default", {
        path: "/"
      });
      // this.route("property", {
      //   path: "/:ref"
      // });
      this.route("editar", {
        path: '/1/editar'
      }, function() {
        this.route("default", {
          path: "/"
        });
        this.route("tab", {
          path: "/:tab"
        });
      });
    });

  });
  this.route('user');
  this.route("property", {
    path: "/property/:id"
  });
  this.route('properties');
});

export default Router;
