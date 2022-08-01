module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {},

  exits: {},

  fn: async function () {
    products = await Product.find({
      select: ['id', 'name'], 
      where: {state: 3}
    });
    for (const product of products){
      product['type'] = 'product'
    }
    categories = await Category.find({
      select: ["id", "name", "parent"],
      where: { state: 3 },
    });
    for (const category of categories){
      if (category.parent){
        category["type"] = "subcategory";
      }
      else{
        category['type'] = 'category'
      }
      delete category["parent"]
    }
    return products.concat(categories);
  },
};
