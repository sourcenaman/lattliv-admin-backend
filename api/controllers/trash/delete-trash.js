module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {
    data: {
      type: ["ref"],
      required: true,
    },
  },

  exits: {
    invalid: {
      statusCode: 400,
    },
    notFound: {
      statusCode: 404,
    },
    success: {
      statusCode: 200,
    },
  },

  fn: async function (inputs, exits) {
    let data = inputs.data;
    let items = [];
    let types = {
      product: Product,
      category: Category,
    };
    for (var obj of data) {
      if ("id" in obj && "type" in obj && obj.type in types) {
        let modelName = types[obj.type];
        var fetch = await modelName.findOne({ id: obj.id });
        if (fetch && fetch.state == 3) {
          var resp = await modelName.destroyOne({ id: obj.id });
          items.push({ id: obj.id, type: obj.type, message: "Deleted" });
        } else
          items.push({ id: obj.id, type: obj.type, message: "Not in trash." });
      } else {
        return exits.invalid({
          message: "ID or Type missing or Incorrect type",
        });
      }
    }
    return exits.success(items);
  },
};
