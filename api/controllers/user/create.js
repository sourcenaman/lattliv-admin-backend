
module.exports = {
  friendlyName: 'Create',

  description: 'Create product.',

  inputs: {
    name: {
      type: 'string',
      required: true,
    },
    email: {
      type: 'string',
      required: true,
    },
    phone: {
      type: 'string',
    },
  },

  exits: {},

  fn: async function (inputs) {
    var user = await User.create(inputs).fetch();
    return user;
  },
};
