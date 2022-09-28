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
    let values
    if (inputs.state == 3) {
      values = {
        state: inputs.state,
        deletedBy: user.id,
      };
    } else if (inputs.state == 2) {
      values = {
        state: inputs.state,
        approvedBy: user.id,
      };
    } else {
      values = {
        state: inputs.state,
      };
    }
    let resp = null;
    switch (inputs.type) {
      case "product":
        resp = await Product.update({ id: inputs.ids }, values).fetch();
        break;
      case "category":
        resp = await Category.update({ id: inputs.ids }, values).fetch();
        break;
      default:
        resp = "Invalid type.";
    }
    return resp;
  },
};
