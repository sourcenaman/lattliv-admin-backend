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
    var parent = await Category.findOne({ id: inputs.id }); //filter out requested category
    if (!parent) {
      throw "notFound";
    }
    return parent;
  },
};
