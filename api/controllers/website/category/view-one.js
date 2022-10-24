module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {
    id: {
      type: "number"
    }
  },

  exits: {
    notFound: {
      statusCode: 404,
    },
    success: {
      statusCode: 200,
    },
  },

  fn: async function (inputs, exits) {
    var categories = await Category.findOne({
      select: ["id", "publish"],
      where: { 
        parent: null,
        publish: {"!=": null},
        id: inputs.id
      }
    });
    return exits.success(categories);
  },
};
