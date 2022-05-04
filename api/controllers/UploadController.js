var aws_module = require('aws-sdk');
aws_module.config.loadFromPath('aws_config.json');
var s3Bucket = new aws_module.S3({ params: { Bucket: "lattliv" } });
module.exports = {
  index: function (req, res) {
    res.writeHead(200, { "content-type": "text/html" });
    res.end(
      '<form action="http://localhost:1337/upload" enctype="multipart/form-data" method="post">' +
        '<input type="text" name="title"><br>' +
        '<input type="file" name="myFile" multiple="multiple"><br>' +
        '<input type="submit" value="Upload">' +
        "</form>"
    );
  },
  upload: async function (req, res) {
    req.file("myFile").upload(
      {
        adapter: require("skipper-s3"),
        key: "AKIA3BFT7BW6OBUZO7VK",
        secret: "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",
        bucket: "lattliv",
        headers: {
          ACL: "public-read",
        },
      },
      function (err, filesUploaded) {
        if (err) return res.serverError(err);
        let image = { Bucket: "lattliv", Key: filesUploaded[0].fd, Expires: 129600 };
        s3Bucket.getSignedUrl("getObject", image, function (err, url) {
          console.log("Image url is", url);
          return res.ok({
            url: url,
          });
         });
      }
    );
  },
};
