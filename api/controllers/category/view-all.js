module.exports = {


  friendlyName: 'View',


  description: 'View product.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {

    console.log("This is sparta");
    var category = await Category.find().populate('createdBy').populate('state');
    return category;

  }


};
