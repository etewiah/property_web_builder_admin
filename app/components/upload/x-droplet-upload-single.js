import Ember from 'ember';


//     $window.Droplet = Mixin.create({
// droplet component sets mixin on global window object
export default Ember.Component.extend(Droplet, {

  // /**
  //  * @property tagName
  //  * @type {String}
  //  */
  // tagName: 'input',
  // // tagName: 'div',

  // /**
  //  * @property classNames
  //  * @type {String}
  //  */
  // classNames: 'files',

  // *
  //  * @property attributeBindings
  //  * @type {Array}

  // attributeBindings: ['disabled', 'name', 'type', 'multiple'],

  // /**
  //  * @property file
  //  * @type {String}
  //  */
  // type: 'file',

  // url: location.origin + '/upload',
  showProg: function() {
    var uploadStatus = this.get("uploadStatus");
    if (uploadStatus.uploading) {
      var uploadingIcon = "<i class='fa fa-spinner fa-spin fa-3x fa-fw'></i><span class='sr-only'>Uploading Photo...</span>";
      swal({
        title: "Uploading Photo",
        text: uploadingIcon,
        html: true,
        showConfirmButton: false,
      });
    } else {
      if (uploadStatus.error) {
        // error always seems to come back empty so doing this shoddy
        // check for filesize in case that is the culprit
        var fileBeingUploaded = this.files[0];
        var fileSize = fileBeingUploaded ? fileBeingUploaded.getFileSize() : 0;
        var errorMessage = "Please try again";
        if (fileSize > 999999) {
          errorMessage = "Please ensure photo is less than 1mb";
        };
        swal({
          title: "Sorry, there has been an error.",
          text: errorMessage,
          showConfirmButton: true,
        }, function() {
          //       this.set("files", []);
          // a bit drastic but it seems failed files queue up 
          // and above does not fix it...
          location.reload();
        });
        // 
      } else {
        swal.close();
      }
    }

  }.observes("uploadStatus.uploading"),
  // }.on('init'),

  actions: {
    selectRemoteImages: function() {
      this.set("showRemoteImagesInput", true);
    },
    addRemoteImages: function() {
      var remoteUrls = this.get("remoteUrls");
      // TODO - parse and validate for list of urls
      this.sendAction("addPhotosFromUrlsAction", remoteUrls);
    },
    // uploadFiles: function() {
    // }
  },

  hooks: {
    didUpload: function(response) {
      // var uploadedFiles = this.get("validFiles");
      // this.get("uploadedFiles") returns an empty array :(
      // below will add photos to array
      this.sendAction("didUploadAction", response);
      // console.log("did an upload");
    }
  },
  options: {
    // useArray: true
    // requestMethod: Droplet.METHOD.PUT,
    uploadImmediately: true,
    // maximumSize: 200,
    maximumValidFiles: 1
      // ...
      //   requestMethod – Changed the request verb from default POST;
      // maximumSize – Set the maximum size for each individual file;
      // maximumValidFiles – Amount of valid files permitted to be in the queue;
      // uploadImmediately – Upload files as they're added to the queue;
      // includeXFileSize – Whether to include the X-File-Size header for progress;
      // useArray – Changes the FormData name of the file to either file[] or file;
      // mimeTypes – List of valid MIME types – can also be changed with mimeTypes method;
      // requestHeaders – Additional request headers to be sent;
      // requestPostData – Additional POST data to be sent;
  }
});
