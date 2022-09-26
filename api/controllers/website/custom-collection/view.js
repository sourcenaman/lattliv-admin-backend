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
    var sections = await Section.find({
      where: {
        type: { "!=": "section" }
      },
      select: ["id", "name", "image"]
    }).sort("id ASC");
    let resp = []
    convertToSlug = (text) => {
      return text
        .toLowerCase()
        .replace(/[^\w ]+/g, "")
        .replace(/ +/g, "-");
    };
    for (let section of sections){
      let slug = await convertToSlug(section.name);
      resp.push({
        ...section,
        slug: slug
      });
    }
    return exits.success(resp);
  },
};
