module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {
    id: {
      type: "number",
      required: true,
    },
  },

  exits: {
    success: {
      statusCode: 200,
    },
    notFound: {
      statusCode: 404,
    },
  },

  fn: async function (inputs, exits) {
    var fetch = await Store.findOne({ id: inputs.id });
    if (fetch) {
      let a = await Store.destroyOne({ id: inputs.id });
      return exits.success({ message: "Deleted" });
    } else {
      return exits.notFound({ id: inputs.id, message: "Store does not exist" });
    }
  },
};
