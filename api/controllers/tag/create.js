module.exports = {
  friendlyName: "Create",

  description: "Create product.",

  inputs: {
    name: {
      type: "string",
      required: true,
    },
    category: {
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
    data["products"] = [];
    for (category of inputs.category) {
      data["products"].push(...category.products);
    }
    var tag = await Tag.create({ name: inputs.name })
    .intercept("E_UNIQUE", () => {
        exits.alreadyExist({ error: "Name already exist." });
    })
    .intercept(() => {
        exits.er({ error: "Something went wrong." });
    })
    .fetch();
    await Tag.addToCollection(tag.id, "products", data.products);
    exits.created({ message: "Created" });
  },
};
