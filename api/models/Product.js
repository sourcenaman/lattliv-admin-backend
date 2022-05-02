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
      unique: true,
      required: true,
    },
    name: {
      type: "string",
      unique: true,
      allowNull: true
    },
    shortDesc: {
      type: "string",
    },
    longDesc: {
      type: "string",
    },
    price: {
      type: "number",
    },
    category: {
      model: "Category",
    },
    state: {
      model: "state",
      required: true,
    },
    createdBy: {
      model: "user",
      required: true,
    },
    specification: {
      type: "json",
    },
    images: {
      type: "json",
    },
    seo: {
      type: "json",
    },
    approvedBy: {
      model: "user",
    },
    inStock: {
      type: "boolean",
    },
    tags: {
      collection: "tag",
      via: "products",
    },
    slug: {
      type: "string",
      unique: true,
      allowNull: true,
    },
  },
};

