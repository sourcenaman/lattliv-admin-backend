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
    let query = `SELECT id, publish from product WHERE ("name" ILIKE $1 or "shortDesc" ILIKE $1) and ("publish" is not NULL)`;
    let toLookFor = '%' +inputs.search+ '%'
    let products = await sails.sendNativeQuery(query, [toLookFor]);
    products = products.rows
    products = products.map((x) => {
      x.publish["id"] = x.id;
      return x.publish;
    });
    return exits.success(products)
  },
};
