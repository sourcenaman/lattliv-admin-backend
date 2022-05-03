module.exports = {
  friendlyName: "Update",

  description: "Update product.",

  inputs: {
    id: {
      type: "number",
      required: true,
    },
    sku: {
      type: "string",
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
    state: {
      type: "number",
    },
    createdBy: {
      type: "number",
    },
  },

  exits: {},

  fn: async function (inputs) {
    // All done.
    var product = await Product.updateOne({ id: inputs.id }).set(inputs);
    return product;
  },
};
