//const User = require('../../models/User');

module.exports = {
  friendlyName: "Create",

  description: "Create product.",

  inputs: {
    name: {
      type: "string",
      required: true,
    }
  },

  exits: {},

  fn: async function (inputs) {
    var state = await State.create(inputs).fetch();
    return state;
  },
};
