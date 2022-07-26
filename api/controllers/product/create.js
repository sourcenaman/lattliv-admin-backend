module.exports = {
  friendlyName: "Create",

  description: "Create product.",

  inputs: {
    sku: {
      type: "string",
      required: true,
    },
    name: {
      type: "string",
      required: true,
    },
    shortDesc: {
      type: "string",
      required: true,
    },
    longDesc: {
      type: "string",
      required: true,
    },
    price: {
      type: "number",
      required: true,
    },
    specification: {
      type: "json",
      required: true,
    },
    category: {
      type: "number",
      required: true,
    },
    inStock: {
      type: "boolean",
      required: true,
    },
    slug: {
      type: "string",
      required: true,
    },
    seo: {
      type: "json",
    },
    images: {
      type: "json",
      required: true,
    },
    state: {
      type: "number",
      required: true,
    },
  },

  exits: {
    stateNotAllowed: {
      statusCode: 400,
      description: "Status not allowed before save or review.",
    },
    alreadyExist: {
      statusCode: 409,
      description: "Product with same name/sku/slug already exist.",
    },
    notFound: {
      statusCode: 404,
      description: "Not found"
    },
    er: {
      statusCode: 500,
      description: "Custom error.",
    },
    created: {
      statusCode: 201,
      description: "Product created",
    },
  },

  fn: async function (inputs, exits) {
    user = this.req.session.user;
    if (inputs.state == 1 || inputs.state == 6) {
      inputs["createdBy"] = user.id;
    } else {
      exits.stateNotAllowed({
        error: "Status not allowed. Allowed status Save(1) or Review(6)",
      });
    }
    var category = await Category.find({ id: inputs.category });
    if (!category){
      exits.notFound({ error: "Subcategory not found." })
    }
    else if (!category.parent){
      exits.er({ error: "Product can be mapped to a subcategory, not category." })
    }
    else if (category.state != 2){
      exits.er({ error: "Please select a published subcategory." })
    }
    return true
    await Product.create(inputs)
      .intercept("E_UNIQUE", () => {
        exits.alreadyExist({ error: "Name already exist." });
      })
      .intercept(() => {
        exits.er({ error: "Something went wrong." });
      });
    exits.created({ message: "Created" });
  },
};

