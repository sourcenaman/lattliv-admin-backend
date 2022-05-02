module.exports = {


  friendlyName: 'View',


  description: 'View product.',


  inputs: {

  },


  exits: {

  },


  fn: async function () {

    var products = await Product.find( {state: { "!=": 5 }} ).populate('createdBy').populate('state').populate('category');
    for (var i=0; i<products.length; i++){
      if (products[i].category.parent){
        var parent = await Category.findOne({select: ['name'], where: {id: products[i].category.parent} });
        products[i].category.parent = parent
      }
    }
    return products;

  }


};
