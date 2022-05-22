module.exports = {
  friendlyName: "Register",

  description: "Register user.",

  inputs: {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
      isEmail: true,
    },
    password: {
      type: "string",
      required: true,
      minLength: 6,
    },
    access: {
      type: "json",
      required: true
    },
    phone: {
      type: "string"
    },
    state: {
      type: "number",
      required: true
    },
  },

  exits: {
    success: {
      statusCode: 201,
      description: "New user created",
    },
    emailAlreadyInUse: {
      statusCode: 400,
      description: "Email address already in use",
    },
    stateError: {
      statusCode: 406,
      description: "The given state is not allowed"
    },
    error: {
      description: "Something went wrong",
    },
  },

  fn: async function (inputs, exits) {
    // All done.
    const newEmailAddress = inputs.email.toLowerCase();
    inputs["email"] = newEmailAddress;
    if (inputs.state != 2){ 
      return exits.stateError({
        error: `State ${inputs.state} is not allowed`,
      }); 
    }
    let newUser = await User.create(inputs).fetch();
    return newUser;
  },
};
