module.exports = {


  friendlyName: 'View',


  description: 'View product.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {

    var category = await Category.find().populate('createdBy').populate('state').populate('children');
    return category;

  }


};
