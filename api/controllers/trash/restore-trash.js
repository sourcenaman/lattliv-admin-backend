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
      statusCode: 400
    },
    notFound: {
      statusCode: 404
    },
    success: {
      statusCode: 200
    }
  },

  fn: async function (inputs, exits) {
    let data = inputs.data;
    let items = []
    let types = {
      "product": Product,
      "category": Category
    };
    for (var obj of data){
      if ("id" in obj && "type" in obj && obj.type in types) {
        let modelName = types[obj.type];
        var resp = await modelName.updateOne({ id: obj.id }).set({ state: 1 })
        resp ? items.push({ id: obj.id, message: "Updated" }) : items.push({ id: obj.id, type: obj.type, message: "Does not exist." });
      } else {
        return exits.invalid({ message: "ID or Type missing or Incorrect type" });
      }
    }
    return exits.success(items); 
  },
};
