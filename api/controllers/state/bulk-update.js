module.exports = {
  friendlyName: "Update",

  description: "Update product.",

  inputs: {
    ids: {
      type: ["number"],
      required: true,
    },
    state: {
      type: "number",
      required: true,
    },
    type: {
      type: "string",
      required: true,
    },
  },

  exits: {},

  fn: async function (inputs) {
    // All done.
    let user = this.req.session.user;
    inputs["deletedBy"] = inputs.state == 3 ? user.id : "";
    inputs["approvedBy"] = inputs.state == 2 ? user.id : "";
    let resp = null;
    switch (inputs.type) {
      case "product":
        resp = await Product.update(
          { id: inputs.ids },
          {
            state: inputs.state,
            deletedBy: inputs.deletedBy,
            approvedBy: inputs.approvedBy,
          }
        ).fetch();
        break;
      case "category":
        resp = await Category.update(
          { id: inputs.ids },
          {
            state: inputs.state,
            deletedBy: inputs.deletedBy,
            approvedBy: inputs.approvedBy,
          }
        ).fetch();
        break;
      default:
        resp = "Invalid type.";
    }
    return resp;
  },
};
