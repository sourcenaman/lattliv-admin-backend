module.exports = {
  friendlyName: "View",

  description: "View product.",

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
    var banners = await Banner.find({});
    let resp = []
    for (let banner of banners[0].images){
        resp.push({
          image_url: banner.url,
          alt_tag: banner.alttag,
          redirect_url: banner.redirect_url || "",
        });
    }
    return exits.success(resp);
  },
};
