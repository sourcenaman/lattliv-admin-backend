module.exports = {


  friendlyName: 'View',


  description: 'View product.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {

    var product = await User.find().sort("id DESC");
    return product;

  }


};
