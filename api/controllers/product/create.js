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
    },
    shortDesc: {
      type: "string",
    },
    longDesc: {
      type: "string",
    },
    price: {
      type: "number",
    },
    specification: {
      type: "json",
    },
    category: {
      type: "number",
    },
    inStock: {
      type: "boolean",
    },
    slug: {
      type: "string",
    },
    images: {
      type: "json",
    },
    state: {
      type: "number",
      required: true,
    },
    createdBy: {
      type: "number",
      required: true,
    },
  },

  exits: {},

  fn: async function (inputs) {
    var product = await Product.create(inputs).fetch();
    return product;
  },
};
