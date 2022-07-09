const jwt = require("jsonwebtoken");

module.exports = {
  friendlyName: "Generate new jwt token",

  description: "",

  inputs: {
    id: {
      type: "number",
      required: true,
    },
    email: {
      type: "string",
      required: true,
    },
    curr_time: {
      type: "string",
      required: true,
    },
  },

  exits: {
    success: {
      description: "All done.",
    },
  },

  fn: async function (inputs) {
    const payload = {
      id: inputs.id,
      email: inputs.email,
      timestamp: inputs.curr_time
    };
    const secret = sails.config.jwtSecret || sails.config.custom.jwtSecret;
    const token = jwt.sign(payload, secret, { expiresIn: "999y" });
    return token;
  },
};
