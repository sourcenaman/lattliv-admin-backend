module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {
    id: {
      type: "number",
      required: true,
    },
    name: {
      type: "string",
    },
    type: {
      type: "string",
    },
    images: {
      type: "json",
    },
  },

  exits: {
    updated: {
      statusCode: 204,
      description: "Tag modified",
    },
  },

  fn: async function (inputs, exits) {
    await Comic.updateOne({ id: inputs.id }).set(inputs);
    exits.updated({ message: "Modified" });
  },
};
