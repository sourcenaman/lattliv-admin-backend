module.exports = {
  friendlyName: "Create",

  description: "Create product.",

  inputs: {
    name: {
      type: "string",
      required: true,
    },
    products: {
      type: ["json"],
      required: true,
    },
  },

  exits: {
    alreadyExist: {
      statusCode: 409,
      description: "Tag with same name already exist.",
    },
    er: {
      statusCode: 500,
      description: "Custom error.",
    },
    created: {
      statusCode: 201,
      description: "Category created",
    },
  },

  fn: async function (inputs, exits) {
    let data = {};
    data["name"] = inputs.name;
    data["products"] = inputs.products;
    var tag = await Tag.create({ name: inputs.name })
    .intercept("E_UNIQUE", () => {
        exits.alreadyExist({ message: "Name already exist." });
    })
    .intercept(() => {
        exits.er({ message: "Something went wrong." });
    })
    .fetch();
    await Tag.addToCollection(tag.id, "products", data.products);
    exits.created({ message: "Created" });
  },
};
