module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {
      id: {
          type: "number",
          required: true
      }
  },

  exits: {},

  fn: async function (inputs) {
    var product = await Product.findOne({ state: { "!=": 5 }, id: inputs.id })
      .populate("createdBy")
      .populate("state")
      .populate("category");

      if (product.category.parent) {
        var parent = await Category.findOne({
          select: ["name"],
          where: { id: product.category.parent },
        });
        product.category.parent = parent;
      }
    return product;
  },
};
