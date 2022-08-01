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
    created: {
      statusCode: 201,
      description: "Section created",
    },
  },

  fn: async function (inputs, exits) {
    await Section.create(inputs)
      .intercept("E_UNIQUE", (err) => {
        if (err.attrNames[0] == 'tag'){
          exits.alreadyExist({ message: "This tag is already linked to a section." });
        }
        else{
          exits.alreadyExist({ message: "Name already exist." });
        }
      })
      .intercept(() => {
        exits.er({ message: "Something went wrong." });
      })
      .fetch();
    exits.created({ message: "Created" });
  },
};
