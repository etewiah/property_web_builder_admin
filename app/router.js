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
    this.route("setup", {
      path: "/dashboard"
    }, function() {
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
    this.route("content", {
      path: "/website"
    }, function() {
      this.route("default", {
        path: "/"
      });
      // not yet in use
      // this.route("settings", function() {
      //   this.route("default", {
      //     path: "/"
      //   });
      //   this.route("tab", {
      //     path: "/:tabName"
      //   });
      // });
      this.route("tab", {
        path: "/:tabName"
      });
    });
    // below route has been superceeded by 
    // /admin/properties/settings  and can be removed
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
      this.route("list", {
        path: '/list'
      }, function() {
        this.route("visible", {
          path: "/visible"
        });
        this.route("hidden", {
          path: "/hidden"
        });
      });
      this.route("settings", function() {
        this.route("default", {
          path: "/"
        });
        this.route("tab", {
          path: "/:tabName"
        });
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
  this.route('not-found', {
    path: '/*path'
  });
});

export default Router;
