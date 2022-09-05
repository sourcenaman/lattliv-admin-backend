module.exports = {
  friendlyName: "Create",

  description: "Create product.",

  inputs: {
    id: {
      type: "number",
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    products: {
      type: ["json"],
      required: true,
    },
  },

  exits: {
    updated: {
      statusCode: 204,
      description: "Tag modified",
    },
  },

  fn: async function (inputs, exits) {
    let data = {};
    data["name"] = inputs.name;
    data["products"] = [];
    await Tag.updateOne({ id: inputs.id }).set({ name: inputs.name });
    await Tag.replaceCollection(inputs.id, "products", []);
    await Tag.addToCollection(inputs.id, "products", data.products);
    exits.updated({ message: "Modified" });
  },
};
