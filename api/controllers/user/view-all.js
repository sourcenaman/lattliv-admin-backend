module.exports = {


  friendlyName: 'View',


  description: 'View product.',


  inputs: {
    id: {
      type: "number",
      required: true
    }
  },


  exits: {
    success: {
      statusCode: 200,
      description: "User found"
    },
    notFound: {
      statusCode: 404,
      description: "User not found with the give ID"
    }
  },


  fn: async function (inputs, exits) {
    var user = await User.findOne({ id: inputs.id })
    return user ? exits.success({ user }) : exits.notFound({ error: `User with ID ${inputs.id} not found.` });
  }
};
