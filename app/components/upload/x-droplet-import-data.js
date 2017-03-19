import Ember from 'ember';
// hbs for this renders upload/x-droplet-single-input
// which is the input pop-up window

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
  // url: function(){
  //   var activeTabObject = this.get("activeTabObject");
  //   // just don't get it but when importUrl below was 
  //   // called importEndPoint, below would resolve to undefined....
  //   return activeTabObject.importUrl;
  // },
  showProg: function() {
    // debugger;
    if ((this.get("invalidFiles").length > 0) && (this.get("validFiles").length < 1)) {
      // debugger;
      swal({
        title: "Invalid file",
        text: "Please ensure you are uploading a valid CSV file with the extension '.csv'.",
        html: true,
        showConfirmButton: true,
      });
      return;
    }
    var uploadStatus = this.get("uploadStatus");
    if (uploadStatus.uploading) {
      var uploadingIcon = "<i class='fa fa-spinner fa-spin fa-3x fa-fw'></i><span class='sr-only'>Uploading Data...</span>";
      swal({
        title: "Uploading Data",
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
          errorMessage = "Please ensure file is less than 1mb";
        }
        var that = this;
        // debugger;
        this.set("invalidFiles",[]);
        this.set("validFiles",[]);
        this.sendAction('clearFiles');
        swal({
          title: "Sorry, there has been an error.",
          text: errorMessage,
          showConfirmButton: true,
        }, function() {
          // - where multiple files can be selected
          // I might need to do something here to clear the queue
          // location.reload();
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
      this.sendAction("addDatasFromUrlsAction", remoteUrls);
    },
    // uploadFiles: function() {
    // }
  },

  hooks: {
    didUpload: function(response) {
      this.sendAction("clearFiles");
// debugger;
      // var uploadedFiles = this.get("validFiles");
      // this.get("uploadedFiles") returns an empty array :(
      // below will add photos to array
      // this.sendAction("didUploadAction", response);
      // console.log("did an upload");
    }
  },
  options: {
    useArray: false,
    // requestMethod: Droplet.METHOD.PUT,
    uploadImmediately: true,
    // maximumSize: 200,
    maximumValidFiles: 1,
    includeXFileSize: true,
    // ...
    //   requestMethod – Changed the request verb from default POST;
    // maximumSize – Set the maximum size for each individual file;
    // maximumValidFiles – Amount of valid files permitted to be in the queue;
    // uploadImmediately – Upload files as they're added to the queue;
    // includeXFileSize – Whether to include the X-File-Size header for progress;
    // useArray – Changes the FormData name of the file to either file[] or file;
    mimeTypes: ['text/csv']
      // mimeTypes: ['image/jpeg', 'image/jpg', 'image/gif', 'image/png', 'image/tiff', 'image/bmp'],
      // – List of valid MIME types – can also be changed with mimeTypes method;
      // requestHeaders – Additional request headers to be sent;
      // requestPostData – Additional POST data to be sent;
  }
});
