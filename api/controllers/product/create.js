//const User = require('../../models/User');

module.exports = {
  friendlyName: "Create",

  description: "Create product.",

  inputs: {
    sku: {
      type: "string",
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    shortDesc: {
      type: "string",
      required: true,
    },
    longDesc: {
      type: "string",
      required: true,
    },
    price: {
      type: "number",
      required: true,
    },
    specification: {
      type: "json",
      required: true,
    },
    category: {
      type: "number",
      required: true,
    },
    inStock: {
      type: "boolean",
      required: true,
    },
    slug: {
      type: "string",
      required: true,
    },
    seo: {
      type: "json",
    },
    images: {
      type: "json",
      required: true,
    },
    state: {
      type: "number",
      required: true,
    }
  },

  exits: {},

  fn: async function (inputs) {
    user = this.req.session.user
    if (inputs.state == 1 || inputs.state == 6){
      inputs["createdBy"] = user.id
    }
    var product = await Product.create(inputs).fetch();
    return product;
  },
};

