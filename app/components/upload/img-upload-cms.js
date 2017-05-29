import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  uploadEndpoint: function() {
    var uploadEndpoint = "/api/v1/cms-pages/photos/" + this.get("block.id") + "/" + this.get("block.identifier");
    return uploadEndpoint;
  }.property("block"),
  filesDidChange: function(files) {
    const uploader = EmberUploader.Uploader.create({
      url: this.get('uploadEndpoint')
    });

    if (!Ember.isEmpty(files)) {
      var extraArgs = { test: "we" };
      // this second argument is optional and can to be sent as extra data with the upload
      uploader.upload(files[0], { extraArgs });
    }


    uploader.on('progress', e => {
      // Handle progress changes
      // Use `e.percent` to get percentage
  
      var uploadingIcon = "<i class='fa fa-spinner fa-spin fa-3x fa-fw'></i><span class='sr-only'>Uploading Photo...</span>";
      swal({
        title: "Uploading Photo",
        text: uploadingIcon,
        html: true,
        showConfirmButton: false,
      });
    });


    uploader.on('didUpload', response => {
      this.set("srcUrl", response.image.url);
      swal.close();

      // S3 will return XML with url
      // let uploadedUrl = $(response).find('Location')[0].textContent;
      // // http://yourbucket.s3.amazonaws.com/file.png
      // uploadedUrl = decodeURIComponent(uploadedUrl);
    });

  }
});
