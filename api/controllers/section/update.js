module.exports = {
  friendlyName: "Create",

  description: "Create product.",

  inputs: {
    id: {
      type: "number",
      required: true,
    },
    name: {
      type: "string",
    },
    image: {
      type: "json",
    },
    tag: {
      type: "number",
    },
    comics: {
      type: ["number"],
    },
    type: {
      type: "string",
      required: true,
    },
  },

  exits: {
    alreadyExist: {
      statusCode: 409,
      description: "Section with same name already exist.",
    },
    er: {
      statusCode: 500,
      description: "Custom error.",
    },
    updated: {
      statusCode: 204,
      description: "Section modified",
    },
  },

  fn: async function (inputs, exits) {
    await Section.updateOne({ id: inputs.id })
      .set(inputs)
      .intercept("E_UNIQUE", () => {
        exits.alreadyExist({ message: "Name already exist." });
      })
      .intercept(() => {
        exits.er({ message: "Something went wrong." });
      })
      .fetch();
    exits.updated({ message: "Modified" });
  },
};
