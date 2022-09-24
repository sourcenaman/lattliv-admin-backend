module.exports = {
  friendlyName: "Update",

  description: "Update product.",

  inputs: {
    id: {
      type: "number",
      required: true,
    },
    name: {
      type: "string",
    },
    desc: {
      type: "string",
    },
    parent: {
      type: "number",
    },
    createdBy: {
      type: "number",
    },
    state: {
      type: "number",
    },
    seo: {
      type: "json",
    },
    image: {
      type: "json",
    },
  },

  exits: {},

  fn: async function (inputs) {
    // All done.
    console.log("Inside category update")
    let user = await this.req.session.user;
    var category = await Category.updateOne({ id: inputs.id }).set(inputs);
    if (inputs.state == 2){
      convertToSlug = (text) => {
        return text
          .toLowerCase()
          .replace(/[^\w ]+/g, "")
          .replace(/ +/g, "-");
      };
      let slug = await convertToSlug(category.name);
      let publish = {
        "name": category.name,
        "image": category.image,
        "seo": category.seo,
        "slug": slug
      }
      await Category.updateOne({ id: inputs.id }).set({ 
        "publish": publish,
        "approvedBy": user.id,
        "slug": slug
       })
    }
    return category;
  },
};
