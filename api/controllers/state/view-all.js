module.exports = {


  friendlyName: 'View',


  description: 'View product.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {

    var state = await State.find().populate('products').populate('categories');
    return state;

  }


};
