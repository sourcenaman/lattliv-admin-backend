module.exports = {
  friendlyName: "Create",

  description: "Create product.",

  inputs: {
    images: {
      type: "json",
      required: true,
    },
  },

  exits: {
    notAllowed: {
      statusCode: 400,
      description: "Image count exceed.",
    },
    er: {
      statusCode: 500,
      description: "Custom error.",
    },
    created: {
      statusCode: 201,
      description: "Product created",
    },
  },

  fn: async function (inputs, exits) {
    if (inputs.images.length > 5) {
      exits.notAllowed({ message: "Images more than 5 are not allowed." });
    }
    await Banner.destroy({})
    await Banner.create(inputs).intercept(() => {
      exits.er({ message: "Something went wrong." });
    });
    exits.created({ message: "Created" });
  },
};
