module.exports = {
  friendlyName: "Update",

  description: "Update product.",

  inputs: {
    id: {
      type: "number",
      required: true,
    },
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
      type: "json",
    },
    timings: {
      type: "string",
    },
  },

  exits: {},

  fn: async function (inputs) {
    // All done.
    var store = await Store.updateOne({ id: inputs.id }).set(inputs);
    return store;
  },
};
