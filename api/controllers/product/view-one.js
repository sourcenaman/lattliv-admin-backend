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
    var product = await Product.find({ state: { "!=": 5 }, id: inputs.id })
      .populate("createdBy")
      .populate("state")
      .populate("category");
    for (var i = 0; i < products.length; i++) {
      if (products[i].category.parent) {
        var parent = await Category.findOne({
          select: ["name"],
          where: { id: products[i].category.parent },
        });
        products[i].category.parent = parent;
      }
    }
    return product;
  },
};
