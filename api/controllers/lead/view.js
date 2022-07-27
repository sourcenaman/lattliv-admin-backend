module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {},

  exits: {
    success: {
      statusCode: 200,
    },
  },

  fn: async function (inputs, exits) {
    var leads = await Lead.find().sort("id DESC")
    exits.success(leads)
  },
};
