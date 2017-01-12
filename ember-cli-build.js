/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  var app = new EmberApp(defaults, {
    // Add options here
    // below avoids the config/env.. meta tag in index.html
    storeConfigInMeta: false,
    fingerprint: {
      exclude: ['img']
      // prepend: 'https://subdomain.cloudfront.net/'
    }
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

  app.import("vendor/icons/Material-Design-Iconic-Font.eot", {
    destDir: "fonts"
  });
  app.import("vendor/icons/Material-Design-Iconic-Font.svg", {
    destDir: "fonts"
  });
  app.import("vendor/icons/Material-Design-Iconic-Font.ttf", {
    destDir: "fonts"
  });
  app.import("vendor/icons/Material-Design-Iconic-Font.woff", {
    destDir: "fonts"
  });

  // datatables uses these fonts:
  app.import("bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.eot", {
    destDir: "fonts"
  });
  app.import("bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.svg", {
    destDir: "fonts"
  });
  app.import("bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.ttf", {
    destDir: "fonts"
  });
  app.import("bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff", {
    destDir: "fonts"
  });
  app.import("bower_components/bootstrap/dist/fonts/glyphicons-halflings-regular.woff2", {
    destDir: "fonts"
  });

  // material design icons don't have a gears/settings icon :(
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

  app.import("bower_components/summernote/dist/font/summernote.eot", {
    destDir: "assets/font"
  });
  app.import("bower_components/summernote/dist/font/summernote.ttf", {
    destDir: "assets/font"
  });
  app.import("bower_components/summernote/dist/font/summernote.woff", {
    destDir: "assets/font"
  });

  app.import('bower_components/datatables/media/js/jquery.dataTables.js');
  app.import('bower_components/datatables/media/js/dataTables.bootstrap.js');
  app.import('bower_components/datatables/media/css/dataTables.bootstrap.css');
  // app.import('bower_components/datatables/media/css/jquery.dataTables.css');
  // turned out I don't need images below anyway as they are only used by the non-bootstrap datatables css

  // can't figure out how to pass directory as it results in this error:
  // You must pass a file to `app.import`. For directories specify them to the constructor under the `trees` option
  // var dtImages = ['sort_asc.png', 'sort_asc_disabled.png', 'sort_desc.png', 'sort_desc_disabled.png', 'sort_both.png'];
  // for (var index in dtImages) {
  //   app.import('bower_components/datatables/media/images/' + dtImages[index], {
  //     destDir: "images"
  //   });
  // }


  // app.import('bower_components/bootstrap-sweetalert/lib/sweet-alert.js');
  // app.import('bower_components/bootstrap-sweetalert/lib/sweet-alert.css');
  // changed from above as custom html did not work and
  // above is behind below and does not have input prompt... 
  app.import('bower_components/sweetalert/dist/sweetalert.min.js');
  app.import('bower_components/sweetalert/dist/sweetalert.css');


  app.import('bower_components/summernote/dist/summernote.js');
  // app.import('bower_components/summernote/dist/summernote-bs3.css');
  app.import('bower_components/summernote/dist/summernote.css');

  app.import('vendor/material-admin-functions.js');
  // app.import('vendor/cesar.css');
  app.import('vendor/cesar-2.css');

  // app.import('vendor/bootstrap-select.css');
  // noticed bootstrap-select is included in _material_design_selected.scss so commented it out here
  app.import('vendor/bootstrap-select.js');

  app.import('bower_components/validate/validate.js');

  app.import('bower_components/sortable/Sortable.js');

  app.import('bower_components/js-cookie/src/js.cookie.js');
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
