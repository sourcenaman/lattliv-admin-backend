module.exports = {
  friendlyName: "Update",

  description: "Update product.",

  inputs: {
      ids: {
          type: ["number"],
          required: true
      },
      state: {
          type: "number",
          required: true
      },
      type: {
          type: "string",
          required: true
      }
  },

  exits: {},

  fn: async function (inputs) {
    // All done.
    console.log(inputs);
    let resp = null;
    switch(inputs.type){
      case "product":
        resp = await Product.update({ id: inputs.ids }, { state: inputs.state }).fetch();
        break;
      case "category":
        resp = await Category.update({ id: inputs.ids }, { state: inputs.state }).fetch();
        break;
      default:
        resp = "Invalid type."
    }
    console.log(resp)
    return resp;
  },
};
