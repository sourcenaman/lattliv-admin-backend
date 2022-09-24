module.exports = {
    friendlyName: "Create",
  
    description: "Create franchise.",
  
    inputs: {
      name: {
        type: "string",
        required: true,
      },
      location: {
        type: "string",
        required: true,
      },
      email: {
        type: "string",
        required: true,
      },
      mobile: {
        type: "string",
        required: true,
      }
    },
  
    exits: {
      alreadyExist: {
        statusCode: 409,
        description: "Franchise with same email/mobile already exist.",
      },
      er: {
        statusCode: 500,
        description: "Custom error.",
      },
      created: {
        statusCode: 201,
        description: "Franchise created",
      },
    },
  
    fn: async function (inputs, exits) {
      await Lead.create(inputs)
        .intercept("E_UNIQUE", () => {
          exits.alreadyExist({ message: "Name/Mobile already exist." });
        })
        .intercept(() => {
          exits.er({ message: "Something went wrong." });
        });
      exits.created({ message: "Created" });
    },
  };
  