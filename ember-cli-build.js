/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    // below avoids the config/env.. meta tag in index.html
    storeConfigInMeta: false
  });

  // Import ember droplet into global namespace (for file updload)
  app.import('bower_components/ember-droplet/dist/ember-droplet.min.js');

  app.import('bower_components/bootstrap-sass/assets/javascripts/bootstrap.js');


  // var bootstrapDir = app.bowerDirectory + '/bootstrap-sass-official/assets';

  // // select bootstrap JavaScript components to include
  // var bootstrapComponents = ['dropdown', 'alert', 'transition', 'tooltip', 'modal'];

  // for (var index in bootstrapComponents) {
  //   app.import(bootstrapDir + '/javascripts/bootstrap/' + bootstrapComponents[index] + '.js');
  // }


  // based on instructions at the end of https://www.npmjs.com/package/ember-cli-font-awesome
  // but using for https://github.com/zavoloklom/material-design-iconic-font
  // app.import("bower_components/font-awesome/css/font-awesome.css");
  // app.import("bower_components/font-awesome/fonts/fontawesome-webfont.eot", {
  //   destDir: "fonts"
  // });
  // app.import("bower_components/material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.eot", {
  //   destDir: "fonts"
  // });
  // app.import("bower_components/material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.svg", {
  //   destDir: "fonts"
  // });
  // app.import("bower_components/material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.ttf", {
  //   destDir: "fonts"
  // });
  // app.import("bower_components/material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.woff", {
  //   destDir: "fonts"
  // });
  // app.import("bower_components/material-design-iconic-font/dist/fonts/Material-Design-Iconic-Font.woff2", {
  //   destDir: "fonts"
  // });

  app.import("bower_components/font-awesome/css/font-awesome.css");
  app.import("bower_components/font-awesome/fonts/fontawesome-webfont.eot", {
    destDir: "fonts"
  });
  app.import("bower_components/font-awesome/fonts/fontawesome-webfont.svg", {
    destDir: "fonts"
  });
  app.import("bower_components/font-awesome/fonts/fontawesome-webfont.ttf", {
    destDir: "fonts"
  });
  app.import("bower_components/font-awesome/fonts/fontawesome-webfont.woff", {
    destDir: "fonts"
  });
  app.import("bower_components/font-awesome/fonts/fontawesome-webfont.woff2", {
    destDir: "fonts"
  });
  app.import("bower_components/font-awesome/fonts/FontAwesome.otf", {
    destDir: "fonts"
  });




  app.import('bower_components/bootstrap-sweetalert/lib/sweet-alert.js');
  app.import('bower_components/bootstrap-sweetalert/lib/sweet-alert.css');


  app.import('bower_components/summernote/dist/summernote.js');
  app.import('bower_components/summernote/dist/summernote-bs3.css');
  app.import('bower_components/summernote/dist/summernote.css');

  app.import('vendor/material-admin-functions.js');
  app.import('vendor/cesar.css');

  app.import('vendor/bootstrap-select.css');
  app.import('vendor/bootstrap-select.js');

  app.import('bower_components/validate/validate.js');

  // // app.import('vendor/preloadstore.js');
  // app.import('vendor/i18n.js');
  // app.import('vendor/translations.js');
  // app.import('vendor/ember-fastclick.js');
  // app.import('vendor/logster.js');
  // // app.import('vendor/jquery.pagedown-bootstrap.combined.js');
  // // app.import('vendor/jquery.pagedown-bootstrap.css');
  // app.import('vendor/jquery.cookie.js');

  // app.import('vendor/lazyYT/lazyYT.js');
  // app.import('vendor/lazyYT/lazyYT.css');


  // app.import('bower_components/summernote/dist/summernote.js');
  // app.import('bower_components/summernote/dist/summernote-bs3.css');
  // app.import('bower_components/summernote/dist/summernote.css');



  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
