module.exports = {
    friendlyName: "View",
  
    description: "View stores.",
  
    inputs: {},
  
    exits: {
      notFound: {
        statusCode: 404,
      },
      success: {
        statusCode: 200,
      },
    },
  
    fn: async function (inputs, exits) {
      var stores = await Store.find({
        omit: ["createdAt", "updatedAt"],
      });
      return exits.success(stores);
    },
  };
  