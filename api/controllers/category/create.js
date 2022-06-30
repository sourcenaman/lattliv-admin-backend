//const User = require('../../models/User');

module.exports = {
  friendlyName: "Create",

  description: "Create product.",

  inputs: {
    name: {
      type: "string",
      required: true,
    },
    desc: {
      type: "string",
    },
    parent: {
      type: "number",
    },
    createdBy: {
      type: "number",
      required: true,
    },
    state: {
      type: "number",
      required: true,
    },
    seo: {
      type: "json",
    },
    image: {
      type: "json",
    }
  },

  exits: {},

  fn: async function (inputs) {
    var category = await Category.create(inputs).fetch();
    return category;
  },
};
