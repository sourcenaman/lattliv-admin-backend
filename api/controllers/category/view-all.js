module.exports = {


  friendlyName: 'View',


  description: 'View product.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {

    var category = await Category.find({
       state: { "!=": 3 } 
      })
      .populate("createdBy")
      .populate("state")
      .populate("children")
      .sort("id DESC");
    return category;

  }


};
