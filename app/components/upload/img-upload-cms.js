import EmberUploader from 'ember-uploader';

export default EmberUploader.FileField.extend({
  uploadEndpoint: function() {
    var uploadEndpoint = "/api/v1/pages/photos/" + this.get("pageSlug") + "/" + this.get("fragmentLabel") + "/" + this.get("block.label");
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

    uploader.on('didError', (jqXHR, textStatus, errorThrown) => {
      // Handle unsuccessful upload
      swal.close();
      swal({
        title: "Sorry, there has been an error.",
        text: "Unable to upload this photo. Please try again.",
        showConfirmButton: true,
      });
    });

    uploader.on('didUpload', response => {
      this.set("srcUrl", response.image_url);
      swal.close();

      // S3 will return XML with url
      // let uploadedUrl = $(response).find('Location')[0].textContent;
      // // http://yourbucket.s3.amazonaws.com/file.png
      // uploadedUrl = decodeURIComponent(uploadedUrl);
    });

  }
});
