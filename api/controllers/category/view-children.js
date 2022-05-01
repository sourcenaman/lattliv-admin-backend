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
    notFound: {
      statusCode: 404,
      message: "Not found",
    },
  },

  fn: async function (inputs) {
    var parent = await Category.find({ parent: inputs.id, state: 2 }); //filter out published sub-categories of requested category
    if (!parent.length) {
      throw "notFound";
    }
    return parent;
  },
};
