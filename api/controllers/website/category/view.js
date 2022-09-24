module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {
    slug: {
      type: "string"
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
    var categories = await Category.find({
      select: ["id", "publish"],
      where: { 
        parent: null,
        publish: {"!=": null}
      }
    });
    return exits.success(categories);
  },
};
