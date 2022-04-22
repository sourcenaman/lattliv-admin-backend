/**
 * Product.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {
  attributes: {
    //  ╔═╗╦═╗╦╔╦╗╦╔╦╗╦╦  ╦╔═╗╔═╗
    //  ╠═╝╠╦╝║║║║║ ║ ║╚╗╔╝║╣ ╚═╗
    //  ╩  ╩╚═╩╩ ╩╩ ╩ ╩ ╚╝ ╚═╝╚═╝

    //  ╔═╗╔╦╗╔╗ ╔═╗╔╦╗╔═╗
    //  ║╣ ║║║╠╩╗║╣  ║║╚═╗
    //  ╚═╝╩ ╩╚═╝╚═╝═╩╝╚═╝

    //  ╔═╗╔═╗╔═╗╔═╗╔═╗╦╔═╗╔╦╗╦╔═╗╔╗╔╔═╗
    //  ╠═╣╚═╗╚═╗║ ║║  ║╠═╣ ║ ║║ ║║║║╚═╗
    //  ╩ ╩╚═╝╚═╝╚═╝╚═╝╩╩ ╩ ╩ ╩╚═╝╝╚╝╚═╝

    sku: {
      type: "string",
      required: true,
      unique: true,
      description: "Product code",
    },
    name: {
      type: "string",
      required: true,
      description: "Product name",
    },
    short_desc: {
      type: "string",
      required: true,
      description: "Short product description",
    },
    long_desc: {
      type: "string",
      required: true,
      description: "Long product description",
    },
    price: {
      type: "number",
      required: true,
      description: "Product price",
    },
    category: {
      model: "Category",
    },
    state: {
      model: "State",
    },
    created_by: {
      model: "User",
    },
    specification: {
      type: "json",
      required: true,
      description:
        "A product will have multiple attributes, which will be stored in this field.",
    },
  }
};

