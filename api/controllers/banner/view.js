module.exports = {
  friendlyName: "Create",

  description: "Create product.",

  inputs: {},

  exits: {
    notFound: {
      statusCode: 404,
    },
    success: {
      statusCode: 200,
    },
  },

  fn: async function (inputs, exits) {
    var banner = await Banner.find({});
    if (Object.keys(banner).length === 0) {
      return exits.notFound();
    } else {
      return exits.success(banner[0]);
    }
  },
};
