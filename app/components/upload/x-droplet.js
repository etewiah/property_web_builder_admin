import Ember from 'ember';

export default Ember.Component.extend(Droplet, {
  // url: location.origin + '/upload',
  actions: {
    selectRemoteImages: function(){
      this.set("showRemoteImagesInput", true);      
    },
    addRemoteImages: function(){
      var remoteUrls = this.get("remoteUrls");
      // TODO - parse and validate for list of urls
      this.sendAction("addPhotosFromUrlsAction", remoteUrls);
    }
    // uploadFiles: function() {
    //   debugger;
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
    useArray: true
    // requestMethod: Droplet.METHOD.PATCH
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
