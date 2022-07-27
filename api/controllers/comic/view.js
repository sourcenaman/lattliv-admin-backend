module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {
    id: {
      type: "number",
    },
  },

  exits: {
    notFound: {
      statusCode: 404,
    },
    success: {
      statusCode: 200,
    },
  },

  fn: async function (inputs, exits) {
    if (inputs.id) {
      var comic = await Comic.findOne({ id: inputs.id }).populate("section");
      if (comic) {
        return exits.success(comic);
      } else return exits.notFound({ message: "Comic not found" });
    } else {
      var comics = await Comic.find().populate("section").sort("id DESC");
      return exits.success(comics);
    }
  },
};
