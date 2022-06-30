module.exports = {
  friendlyName: "Update",

  description: "Update product.",

  inputs: {
    id: {
      type: "number",
      required: true,
    },
    name: {
      type: "string",
    },
    desc: {
      type: "string",
    },
    parent: {
      type: "number",
    },
    createdBy: {
      type: "number",
    },
    state: {
      type: "number",
    },
    seo: {
      type: "json",
    },
    image: {
      type: "json",
    },
  },

  exits: {},

  fn: async function (inputs) {
    // All done.
    var category = await Category.updateOne({ id: inputs.id }).set(inputs);
    return category;
  },
};
