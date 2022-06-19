module.exports = {
  friendlyName: "Create",

  description: "Create product.",

  inputs: {
    name: {
      type: "string",
    },
    place: {
      type: "string",
    },
    address: {
      type: "string",
    },
    email: {
      type: "string",
    },
    number: {
      type: "json",
    },
    manager: {
      type: "string",
    },
    map: {
      type: "string",
    },
    image: {
      type: "string",
    },
    timings: {
      type: "string",
    }
  },

  exits: {},

  fn: async function (inputs) {
    var store = await Store.create(inputs).fetch();
    return store;
  },
};
