module.exports = {
  friendlyName: "View",

  description: "View product.",

  inputs: {
    id: {
      type: "number"
    }
  },

  exits: {
    notFound: {
      statusCode: 404
    },
    success: {
      statusCode: 200
    }
  },

  fn: async function (inputs, exits) {
    if (inputs.id){
      var store = await Store.findOne({ id: inputs.id });
      if (store)
        return exits.success(store)
      else
        return exits.notFound({ "error": "Store not found" })
    }
    else{
      var stores = await Store.find().sort("id DESC");
      return exits.success(stores);
    }
  },
};
