module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {
    id: {
      type: "number",
    },
  },

  exits: {
    notFound: {
      statusCode: 404,
    },
    success: {
      statusCode: 200,
    },
  },

  fn: async function (inputs, exits) {
    if (inputs.id) {
      var tag = await Tag.findOne({ id: inputs.id }).populate("products");
      if (tag){
        let data = {}
        data["id"] = tag.id
        data["name"] = tag.name
        data["data"] = []
        for (product of tag.products){
          var category = await Category.findOne({ id: product.category })
          data["data"].push({ "category": category.parent, "product": product.id })
        }
        return exits.success(data); 
      }
      else return exits.notFound({ message: "Tag not found" });
    } else {
      var tags = await Tag.find().sort("id DESC");
      return exits.success(tags);
    }
  },
};


