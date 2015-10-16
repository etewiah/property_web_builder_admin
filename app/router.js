import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});


Ember.Router.reopen({
  updateTitle: function() {
    // call action in application route
    this.send('setActiveLeftNav');
  }.on('didTransition'),
});


Router.map(function() {
  this.route('admin', function() {
    this.route("default", {
      path: "/"
    });
    this.route('inicio');
    this.route("content", function() {
      this.route("default", {
        path: "/"
      });
      this.route("tab", {
        path: "/:tabName"
      });
      // this.route("editar", {
      //   path: '/:idPropiedad/editar'
      // }, function() {
      //   this.route("default", {
      //     path: "/"
      //   });
      //   this.route("tab", {
      //     path: "/:tabName"
      //   });
      // });
    });
    this.route("propiedades", {
      path: '/properties'
    }, function() {
      this.route("default", {
        path: "/"
      });
      this.route("nuevo", {
        path: "/nuevo"
      });
      this.route("editar", {
        path: '/:idPropiedad/editar'
      }, function() {
        this.route("default", {
          path: "/"
        });
        this.route("tab", {
          path: "/:tabName"
        });
      });
    });

  });
  this.route('user');
  // this.route("property", {
  //   path: "/property/:id"
  // });
  // this.route('properties');

  // this.route('start', function() {
  //   this.route("default", {
  //     path: "/"
  //   });
  //   this.route('inicio');
  //   this.route("properties", function() {
  //     this.route("default", {
  //       path: "/"
  //     });
  //     // this.route("property", {
  //     //   path: "/:ref"
  //     // });
  //     this.route("property", {
  //       path: '/:ref'
  //     }, function() {
  //       this.route("default", {
  //         path: "/"
  //       });
  //       this.route("tab", {
  //         path: "/:tab"
  //       });
  //     });
  //   });
  // });
});

export default Router;
