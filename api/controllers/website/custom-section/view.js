module.exports = {
  friendlyName: "View",

  description: "View stores.",

  inputs: {},

  exits: {
    notFound: {
      statusCode: 404,
    },
    success: {
      statusCode: 200,
    },
  },

  fn: async function (inputs, exits) {
    var sections = await Section.find({
      type: "section"
    });
    let resp = []
    var junctor = sails.models["product_tags__tag_products"];
    for (let section of sections){
      let products = [];
      let tag = await Tag.findOne({ id: section.tag })
      let tag_products = await junctor
        .find({ tag_products: tag.id })
        .populate("product_tags")
        .sort("id ASC");
      for (let product of tag_products) {
        if (product.product_tags.publish) {
          product.product_tags.publish["id"] = product.product_tags.id;
          products.push(product.product_tags.publish);
        }
      }
      resp.push({
        name: section.name,
        products: products,
      });
    }
    return exits.success(resp);
  },
};
