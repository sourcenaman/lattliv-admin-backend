module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {},

  exits: {},

  fn: async function (_, exits) {
      exits.success({
          message: "This is the output"
      })
  },
};
