module.exports = {
  friendlyName: "Update",

  description: "Update product.",

  inputs: {
    id: {
      type: "number",
      required: true
    },
    name: {
      type: "string"
    },
    email: {
      type: "string"
    },
    phone: {
      type: "string"
    },
    state: {
      type: "number"
    },
    password: {
      type: "string"
    },
    access: {
      type: "json"
    }
  },

  exits: {},

  fn: async function (inputs) {
    var user = await User.updateOne({ id: inputs.id }).set(inputs);
    return user;
  },
};
