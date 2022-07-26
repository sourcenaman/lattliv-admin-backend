module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {
    id: {
      type: ["number"],
      required: true
    }
  },

  exits: {
    invalid: {
      statusCode: 400,
    },
    notFound: {
      statusCode: 404,
    },
    success: {
      statusCode: 200,
    },
  },

  fn: async function (inputs, exits) {
    await Tag.destroy({ id: { in: inputs.id } })
    exits.success({ message: "Deleted" })
  },
};
