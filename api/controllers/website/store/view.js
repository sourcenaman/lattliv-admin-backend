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
      var stores = await Store.find({});
      let resp = []
      for (let store of stores[0].images){
          resp.push({
            id: store.id,
            name: store.name,
            place: store.place || "",
            address: store.address || "",
            email: store.email || "",
            number: store.number || "",
            manager: store.manager || "",
            map: store.map || "",
            image: store.image,
            timings: store.timings || "",
          });
      }
      return exits.success(resp);
    },
  };
  