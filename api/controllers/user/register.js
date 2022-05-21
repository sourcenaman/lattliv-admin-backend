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
    error: {
      description: "Something went wrong",
    },
  },

  fn: async function (inputs) {
    // All done.
    const newEmailAddress = inputs.email.toLowerCase();
    let newUser = await User.create({
      name: inputs.name,
      email: newEmailAddress,
      password: inputs.password,
      access: inputs.access
    }).fetch();
    return newUser;
  },
};
