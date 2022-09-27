module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {
    id: {
      type: "number",
    },
    type: {
      type: "string",
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
    switch (inputs.type){
      case "category":
        let sub = await Category.find({
          where: {
            publish: { "!=": null },
            parent: inputs.id
          },
          select: ["id"]
        })
        let subIds = sub.map(x => x.id)
        let products = await Product.find({
          where: {
            publish: { "!=": null },
            category: subIds
          },
          select: ["publish", "id"]
        });
        products = products.map(x => {
          x.publish["type"] = "product"
          x.publish["id"] = x.id
          return x.publish
        })
        return exits.success(products);

      case "collection":
        let section = await Section.findOne({
          where: { "id": inputs.id },
          select: ["id", "tag", "type"]
        })
        if (section.type == "product"){
          var junctor = sails.models["product_tags__tag_products"];
          let products = [];
          let tag = await Tag.findOne({ id: section.tag });
          let tag_products = await junctor
            .find({ tag_products: tag.id })
            .populate("product_tags")
            .sort("id ASC");
          for (let product of tag_products) {
            if (product.product_tags.publish) {
              product.product_tags.publish["type"] = "product"
              products.push(product.product_tags.publish);
            }
          }
          console.log(products)
          return exits.success(products);
        }
        else{
          let comics = await Comic.find({
            section: section.id
          })
          comics = comics.map(x => {
            return {
              "id": x.id,
              "name": x.name,
              "images": x.images,
              "type": "comics"
            }
          })
          return exits.success(comics);
        }
      
      case "product":
        if (inputs.id){
          let product = await Product.findOne({
            where: { id: inputs.id },
            select: ["publish", "id"],
          });
          product.publish["id"] = product.id;
          return exits.success(product.publish);    
        }
        else{
          let products = await Product.find({
            where: { publish: { "!=": null } },
            select: ["publish", "id"]
          })
          products = products.map(x => {
            x.publish["id"] = x.id
            return x.publish
          })
          return exits.success(products);
        }
    }

  },
};
