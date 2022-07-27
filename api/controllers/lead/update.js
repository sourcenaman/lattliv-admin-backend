module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {
    id: {
      type: "number",
      required: true,
    },
    status: {
      type: "string",
      required: true
    }
  },

  exits: {
    updated: {
      statusCode: 204,
      description: "Tag modified",
    },
  },

  fn: async function (inputs, exits) {
    await Lead.updateOne({ id: inputs.id }).set({ status: inputs.status });
    exits.updated({ message: "Modified" });
  },
};
