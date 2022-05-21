// [your-sails-app]/config/autoreload.js
module.exports.autoreload = {
  active: true,
  usePolling: false,
  dirs: [
    "api/models",
    "api/controllers",
    "api/services",
    "config/locales",
    "config/",
    "api/controllers/product",
    "api/controllers/state",
    "api/controllers/user",
    "api/controllers/category",
  ],
  ignored: [
    // Ignore all files with .ts extension
    "**.ts",
  ],
};
