module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {
    data: {
      type: ["ref"],
      required: true,
    },
  },

  exits: {
    invalid: {
      statusCode: 400
    },
    notFound: {
      statusCode: 404
    },
  },

  fn: async function (inputs, exits) {
    // products = await Product.find({ state: { "==": 3 } });
    // categories = await Category.find({ state: { "==": 3 } });
    let data = inputs.data;
    let types = ["product", "category"];
    data.forEach((obj) => {
      if ("id" in obj && "type" in obj && obj.type in types) {
      } else {
        return exits.invalid({ message: "ID or Type missing or Incorrect type" });
      }
    });
    return data;
  },
};
