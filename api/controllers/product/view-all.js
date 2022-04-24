module.exports = {


  friendlyName: 'View',


  description: 'View product.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {

    console.log("This is sparta");
    var product = await Product.find();
    return product;

  }


};
