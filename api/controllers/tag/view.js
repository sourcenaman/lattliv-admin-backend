module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {
    id: {
      type: "number",
    },
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
    if (inputs.id) {
      var junctor = sails.models["product_tags__tag_products"];
      var tag = await Tag.findOne({ id: inputs.id })
      var tag_products = await junctor.find({ tag_products: tag.id }).populate('product_tags').sort('id ASC')
      if (tag_products) {
        let data = {};
        data["id"] = tag.id;
        data["name"] = tag.name;
        data["data"] = [];
        for (var product_tag of tag_products) {
          let product = product_tag.product_tags;
          if (product && product.state == 2) {
            let category = await Category.findOne({
              id: product.category,
            });
            data["data"].push({
              category: category.parent,
              product: product.id,
            });
          }
        }
        return exits.success(data);
      } else return exits.notFound({ message: "Tag not found" });
    } else {
      var tags = await Tag.find().sort("id DESC");
      return exits.success(tags);
    }
  },
};


