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
    seo: {
      type: "json",
    },
    blog: {
      type: "string",
    },
    images: {
      type: "json",
    },
    state: {
      type: "number",
    },
  },

  exits: {},

  fn: async function (inputs) {
    // All done.
    user = this.req.session.user;
    if (inputs.state == 2) {
      inputs["approvedBy"] = user.id;
    }
    var product = await Product.updateOne({ id: inputs.id }).set(inputs);
    return product;
  },
};
