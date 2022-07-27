module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {
    id: {
      type: ["number"],
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 200,
    },
  },

  fn: async function (inputs, exits) {
    await Comic.destroy({ id: { in: inputs.id } });
    exits.success({ message: "Deleted" });
  },
};
