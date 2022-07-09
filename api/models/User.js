/**
 * User.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */
module.exports = {
  attributes: {
    name: {
      type: "string",
      required: true,
    },
    email: {
      type: "string",
      required: true,
      unique: true,
    },
    phone: {
      type: "string",
    },
    state: {
      model: "state",
      required: true,
    },
    password: {
      type: "string",
      required: true,
    },
    access: {
      type: "json",
      required: true,
    },
    token: {
      type: "string",
    },
    products_created: {
      collection: "product",
      via: "createdBy",
    },
    products_approved: {
      collection: "product",
      via: "approvedBy",
    },
    categories_created: {
      collection: "category",
      via: "createdBy",
    },
    categories_approved: {
      collection: "category",
      via: "approvedBy",
    },
  },
  customToJSON: function () {
    return _.omit(this, ["password", "token"]);
  },
  beforeCreate: async function (values, proceed) {
    // Hash password
    const hashedPassword = await sails.helpers.passwords.hashPassword(
      values.password
    );
    values.password = hashedPassword;
    return proceed();
  },
  beforeUpdate: async function (values, proceed) {
    // Hash password
    if (values.password){
      const hashedPassword = await sails.helpers.passwords.hashPassword(
        values.password
      );
      values.token = ""
      values.password = hashedPassword;
    }
    return proceed();
  },
};

