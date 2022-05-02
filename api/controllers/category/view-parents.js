module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {},

  exits: {},

  fn: async function () {
    var parent = await Category.find({ parent: null, state: 2 }).populate('children'); //filter out published categories
    return parent;
  },
};
