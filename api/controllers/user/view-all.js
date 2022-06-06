module.exports = {


  friendlyName: 'View',


  description: 'View product.',


  inputs: {},


  exits: {},


  fn: async function (inputs, exits) {
    var users = await User.find( { state: { "!=": 3 }} ).sort("id DESC");
    return users ? exits.success(users) : exits.notFound({ error: `User with ID ${inputs.id} not found.` });
  }
};
