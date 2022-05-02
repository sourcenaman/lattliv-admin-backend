//const User = require('../../models/User');

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
    },
    shortDesc: {
      type: "string",
    },
    longDesc: {
      type: "string",
    },
    price: {
      type: "number",
    },
    specification: {
      type: "json",
    },
    category: {
      type: "number",
    },
    state: {
      type: "number",
      required: true,
    },
    createdBy: {
      type: "number",
      required: true,
    },
  },

  exits: {},

  fn: async function (inputs) {
    let data = [
      {
        createdAt: "2022-05-02T03:10:52.118Z",
        updatedAt: "2022-05-02T03:10:52.118Z",
        id: 1,
        sku: "c8d3a",
        name: "Kuber Industries Checkered Design Cotton Kitchen Apron with Front Pocket (Multi)-CTKTC32667",
        shortDesc:
          "Color: Multi, Size Name: Standard Material: Cotton Package Contents: Cotton Kitchen Apron with Front Pocket Size: 79 x 56 x 1 Cm Kitchen Apron provides good coverage from kitchen spills and stains.Made from 100 percent cotton, this kitchen apron is machine-washable and comfortable to use Adjustable neck strap and waist belt ensures a good fit.20 cm deep front pocket can be used to keep recipes, kitchen tools and personal accessories",
        longDesc:
          "This Apron is your Over Garment and Style Statement of Kitchen. The Fabric is soft in feel and durable to last long. 100% Cotton free Size stylish latest design great look Ideal for Women. It will brighten your Kitchen with lovely colors. One Size Fits All. Roomy front pockets hold small tools.",
        price: 82,
        specification: {},
        images: null,
        seo: null,
        inStock: false,
        slug: null,
        category: 14,
        state: 1,
        createdBy: 1,
        approvedBy: null,
      },
      {
        createdAt: "2022-05-02T03:12:18.380Z",
        updatedAt: "2022-05-02T03:12:18.380Z",
        id: 2,
        sku: "1234abc",
        name: "Surface Pro",
        shortDesc: "This and light laptop",
        longDesc:
          "2022 Surface Pro with Intel Core i7-1185U. 8GB RAM 256GB Storage",
        price: 119900,
        specification: {
          "Sales Package":
            "MacBook Air, 30 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MGN63HN/A",
          Colour: "Space Grey",
          "Battery Backup": "Upto 15 hrs",
          "RAM Type": "DDR4",
        },
        images: null,
        seo: null,
        inStock: false,
        slug: "",
        category: 1,
        state: 1,
        createdBy: 1,
        approvedBy: null,
      },
      {
        createdAt: "2022-05-02T03:18:11.936Z",
        updatedAt: "2022-05-02T03:18:11.936Z",
        id: 3,
        sku: "123abc",
        name: "Macbook Air",
        shortDesc: "This and light laptop",
        longDesc: "2020 Macbook with M1 processor. 8GB RAM 256GB Storage",
        price: 92900,
        specification: {
          "Sales Package":
            "MacBook Air, 30 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MGN63HN/A",
          Colour: "Space Grey",
          "Battery Backup": "Upto 15 hrs",
          "RAM Type": "DDR4",
        },
        images: null,
        seo: null,
        inStock: false,
        slug: null,
        category: 2,
        state: 1,
        createdBy: 1,
        approvedBy: null,
      },
      {
        createdAt: "2022-05-02T03:20:51.822Z",
        updatedAt: "2022-05-02T03:20:51.822Z",
        id: 4,
        sku: "123456abc",
        name: "Surface Pro",
        shortDesc: "This and light laptop",
        longDesc:
          "2022 Surface Pro with Intel Core i7-1185U. 8GB RAM 256GB Storage",
        price: 119900,
        specification: {
          "Sales Package":
            "MacBook Air, 30 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MGN63HN/A",
          Colour: "Space Grey",
          "Battery Backup": "Upto 15 hrs",
          "RAM Type": "DDR4",
        },
        images: null,
        seo: null,
        inStock: false,
        slug: null,
        category: 2,
        state: 1,
        createdBy: 1,
        approvedBy: null,
      },
      {
        createdAt: "2022-05-02T03:23:41.302Z",
        updatedAt: "2022-05-02T03:23:41.302Z",
        id: 5,
        sku: "1234abd",
        name: "Surface Pro test",
        shortDesc: "This and light laptop",
        longDesc:
          "2022 Surface Pro with Intel Core i7-1185U. 8GB RAM 256GB Storage",
        price: 119900,
        specification: {
          "Sales Package":
            "MacBook Air, 30 W USB-C Power Adapter, USB-C Charge Cable (2m), User Guide, Warranty Documents",
          "Model Number": "MGN63HN/A",
          Colour: "Space Grey",
          "Battery Backup": "Upto 15 hrs",
          "RAM Type": "DDR4",
        },
        images: null,
        seo: null,
        inStock: false,
        slug: null,
        category: 1,
        state: 1,
        createdBy: 1,
        approvedBy: null,
      },
      {
        createdAt: "2022-05-02T03:24:57.202Z",
        updatedAt: "2022-05-02T03:24:57.202Z",
        id: 6,
        sku: "7ebcb",
        name: "test",
        shortDesc: "ttt",
        longDesc: "tst",
        price: 111,
        specification: {},
        images: null,
        seo: null,
        inStock: false,
        slug: null,
        category: 1,
        state: 1,
        createdBy: 1,
        approvedBy: null,
      },
      {
        createdAt: "2022-05-02T03:44:39.991Z",
        updatedAt: "2022-05-02T03:44:39.991Z",
        id: 9,
        sku: "f4c00",
        name: "Wakefit Hollow Fibre Pillow ( 68.58 cm X 40.64 cm, White and Grey )- 2 Pieces",
        shortDesc:
          "About this item Pillow Feel : Fluffy and medium firm Warranty : 3 Months manufacturer warranty Fabric Material Type : 300 ± 10% GSM breathable fabric Fill : 200 GSM Hollow fiber, extra 300gm fibre fill Pillow Dimensions : 27 x 16 inches ( 68.5 cm x 40.5 cm)",
        longDesc:
          "This revolutionary technology ensures that the products support your spine well while retaining their softness and bounce for a long time. The pillow ensures that you get a perfect night's sleep.  this will Improving your sleep quality and giving you maximum comfort, this magic dream pillow comes with a filling and microfiber fill in this material which makes all the difference.",
        price: 100,
        specification: {},
        images: null,
        seo: null,
        inStock: false,
        slug: null,
        category: 14,
        state: 1,
        createdBy: 1,
        approvedBy: null,
      },
      {
        createdAt: "2022-05-02T09:06:56.722Z",
        updatedAt: "2022-05-02T09:36:50.514Z",
        id: 13,
        sku: "e69e9",
        name: "The Alchemist",
        shortDesc: "test",
        longDesc: "test",
        price: 80,
        specification: {},
        images: null,
        seo: null,
        inStock: false,
        slug: null,
        category: 1,
        state: 1,
        createdBy: 1,
        approvedBy: null,
      },
    ];
    for (let d of data) {
      try {
        var product = await Product.create(d).fetch();
      } catch (err) {
        console.log(err);
      }
    }
    return product;
  },
};
