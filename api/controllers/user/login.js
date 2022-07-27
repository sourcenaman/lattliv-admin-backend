module.exports = {
  friendlyName: "Login",

  description: "Login user.",

  inputs: {
    email: {
      type: "string",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      description: "Login successful",
    },
    notAUser: {
      statusCode: 404,
      description: "User not found",
    },
    passwordMismatch: {
      statusCode: 401,
      description: "Password do not match",
    },
    operationalError: {
      statusCode: 400,
      description: "The request was formed properly",
    },
  },

  fn: async function (inputs, exits) {
    const user = await User.findOne({
      where: { email: inputs.email },
      select: ["name", "email", "access", "phone", "password"],
    });
    if (!user) {
      return exits.notAUser({
        message: `An account belonging to ${inputs.email} was not found`,
      });
    }
    await sails.helpers.passwords
      .checkPassword(inputs.password, user.password)
      .intercept("incorrect", (error) => {
        exits.passwordMismatch({ message: error.message });
      });
    let curr_time = Math.round(new Date().getTime() / 1000);
    const token = await sails.helpers.generateNewJwtToken(user.id, user.email, curr_time);
    session_data = {
      user: user.id,
      headers: this.req.headers
    }
    await Session.create(session_data);
    await User.updateOne({ id: user.id }).set({ token: curr_time });
    return exits.success({
      message: `${user.email} has been logged in`,
      data: user,
      token,
    });
  },
};
