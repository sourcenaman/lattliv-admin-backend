//const User = require('../../models/User');

module.exports = {


  friendlyName: 'Create',


  description: 'Create product.',


  inputs: {
    data: {
      type: 'json',
      required: true
    }
  },


  exits: {

  },


  fn: async function (inputs) {

    var product = await Product.create(inputs.data).fetch();
    return product;

  }


};
