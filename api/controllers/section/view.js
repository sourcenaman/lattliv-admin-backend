module.exports = {
  friendlyName: "Create",

  description: "Create product.",

  inputs: {
    type: {
      type: "string"
    },
    id: {
      type: "number"
    }
  },

  exits: {
    notFound: {
      statusCode: 404,
      description: "Section not found.",
    },
    er: {
      statusCode: 500,
      description: "Custom error.",
    },
    success: {
      statusCode: 200
    },
  },

  fn: async function (inputs, exits) {
    if (inputs.id && inputs.type == "image") {
      var section = await Section.findOne({
        where: {
          id: inputs.id,
          image: { "!=": null },
        },
      }).populateAll();
    } else if (inputs.id && inputs.type == "noimage") {
      var section = await Section.findOne({
        where: {
          id: inputs.id,
          image: null,
        },
      }).populateAll();
    } else if (inputs.type == "image") {
      var section = await Section.find({
        where: {
          image: { "!=": null },
        },
      }).populateAll();
    } else if (inputs.type == "noimage") {
      var section = await Section.find({
        where: {
          image: null,
        },
      }).populateAll();
    }
    if (section){
      exits.success(section)
    }
    exits.notFound({ message: "Section(s) not found." })
  },
};
