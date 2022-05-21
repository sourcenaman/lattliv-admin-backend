module.exports = {
  friendlyName: "Reset password",

  description: "",

  inputs: {
    password: {
      description: "The new, unencrypted password.",
      example: "myfancypassword",
      required: true,
    },
    email: {
      required: true,
      type: "string",
      isEmail: true
    },
  },

  exits: {},

  fn: async function (inputs) {
    var user = await User.findOne({ email: inputs.email });
    const hashedPassword = await sails.helpers.passwords.hashPassword(
      inputs.password
    );
    await User.updateOne({ id: user.id }).set({
      password: hashedPassword,
    });
    return;
  },
};
