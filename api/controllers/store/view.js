module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {},

  exits: {},

  fn: async function () {
    var products = await Store.find();
    return products;
  },
};
