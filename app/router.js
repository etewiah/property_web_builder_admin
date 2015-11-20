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
  // this.route("rootadmin", {
  //   path: "/admin"
  // });
  // correct routing of above will happen rails side
  this.route('admin', {
    path: "/:locale/admin"
  }, function() {
    this.route("default", {
      path: "/"
    });
    this.route('inicio');
    this.route("setup",  {
        path: "/dashboard"
      },function() {
      this.route("default", {
        path: "/"
      });
      this.route("step", {
        path: "/:stepName"
      });
    });
    this.route("agency", function() {
      this.route("default", {
        path: "/"
      });
      this.route("tab", {
        path: "/:tabName"
      });
    });
    this.route("content", function() {
      this.route("default", {
        path: "/"
      });
      this.route("tab", {
        path: "/:tabName"
      });
    });
    this.route("translations", function() {
      this.route("default", {
        path: "/"
      });
      this.route("tab", {
        path: "/:tabName"
      });
    });
    this.route("clients", {
      path: '/clients'
    }, function() {
      this.route("default", {
        path: "/"
      });
      this.route("new", {
        path: "/new"
      });
      this.route("edit", {
        path: '/:id/edit'
      }, function() {
        this.route("default", {
          path: "/"
        });
        this.route("tab", {
          path: "/:tabName"
        });
      });
    });
    this.route("propiedades", {
      path: '/properties'
    }, function() {
      this.route("default", {
        path: "/"
      });
      this.route("nuevo", {
        path: "/new"
      });
      this.route("editar", {
        path: '/:idPropiedad/edit'
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
  // });
});

export default Router;
