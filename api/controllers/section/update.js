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
    console.log(inputs)
    await Section.updateOne({ id: inputs.id })
      .set(inputs)
      .intercept("E_UNIQUE", () => {
        exits.alreadyExist({ message: "Name already exist." });
      })
      .intercept(() => {
        exits.er({ message: "Something went wrong." });
      })
      .fetch();
    // if (inputs.comics) {
    //   await Comic.update({ id: inputs.comics }).set({ section: inputs.id });
    // }
    exits.updated({ message: "Modified" });
  },
};
