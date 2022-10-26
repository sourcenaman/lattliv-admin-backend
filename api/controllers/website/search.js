module.exports = {
  friendlyName: "View",

  description: "View stores.",

  inputs: {
    search: {
        type: "string",
        required: true
    }
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
    let query = `SELECT id, name, slug from product WHERE ("name" ILIKE $1 or "shortDesc" ILIKE $1)`;
    let toLookFor = '%' +inputs.search+ '%'
    let products = await sails.sendNativeQuery(query, [toLookFor]);
    return exits.success(products.rows)
  },
};
