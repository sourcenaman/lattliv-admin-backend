module.exports = {
  friendlyName: "Create",

  description: "Create product.",

  inputs: {},

  exits: {},

  fn: async function () {
    var banner = await Banner.find({})
    return banner[0]
  }
};
