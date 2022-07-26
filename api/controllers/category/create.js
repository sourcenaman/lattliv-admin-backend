//const User = require('../../models/User');

module.exports = {
  friendlyName: "Create",

  description: "Create product.",

  inputs: {
    name: {
      type: "string",
      required: true
    },
    desc: {
      type: "string",
      required: true,
    },
    parent: {
      type: "number",
    },
    state: {
      type: "number",
      required: true,
    },
    seo: {
      type: "json",
    },
    image: {
      type: "json",
      required: true,
    },
  },

  exits: {
    stateNotAllowed: {
      statusCode: 400,
      description: "Status not allowed before save or review.",
    },
    alreadyExist: {
      statusCode: 409,
      description: "Category with same name already exist.",
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
    user = this.req.session.user;
    if (inputs.state == 1 || inputs.state == 6) {
      inputs["createdBy"] = user.id;
    } else {
      exits.stateNotAllowed({
        error: "Status not allowed. Allowed status Save(1) or Review(6)",
      });
    }
    await Category.create(inputs)
      .intercept("E_UNIQUE", () => {
        exits.alreadyExist({ error: "Name already exist." });
      })
      .intercept(() => {
        exits.er({ error: "Something went wrong." });
      });
    exits.created({ message: "Created" });
  },
};
