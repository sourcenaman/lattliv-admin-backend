module.exports = {
  friendlyName: "Create",

  description: "Create product.",

  inputs: {
    name: {
      type: "string",
      required: true,
    },
    type: {
      type: "string",
      required: true,
    },
    images: {
      type: "json",
      required: true,
    },
  },

  exits: {
    alreadyExist: {
      statusCode: 409,
      description: "Product with same name/sku/slug already exist.",
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
    await Comic.create(inputs)
      .intercept("E_UNIQUE", () => {
        exits.alreadyExist({ message: "Name already exist." });
      })
      .intercept(() => {
        exits.er({ message: "Something went wrong." });
      });
    exits.created({ message: "Created" });
  },
};
