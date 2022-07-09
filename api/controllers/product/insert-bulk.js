//const User = require('../../models/User');

module.exports = {
  friendlyName: "Create",

  description: "Create product.",

  inputs: {},

  exits: {},

  fn: async function () {
    let data = [
      {
        createdAt: "2022-06-19T13:57:58.867Z",
        updatedAt: "2022-06-27T04:18:28.525Z",
        id: 15,
        name: "test user",
        email: "product@gmail.com",
        phone: "12321312121",
        password:
          "$2a$10$BGHnBzfjv62gJe3LilTcO.ouJzniWbceuiYenoW1GQW2/YrXbYEri",
        access: {
          products: {
            create: true,
            edit: true,
            delete: true,
            publish: true,
            view: true,
            hide: true,
          },
          categories: {
            create: true,
            edit: true,
            delete: true,
            view: true,
            publish: true,
          },
          subcategories: {
            create: true,
            edit: true,
            delete: true,
            view: true,
            publish: true,
          },
          users: { create: true, edit: true, delete: true, view: true },
          stores: { create: true, edit: true, delete: true, view: true },
        },
        state: 2,
      },
      {
        createdAt: "2022-06-22T09:05:29.165Z",
        updatedAt: "2022-06-22T09:50:56.553Z",
        id: 16,
        name: "Karan Dudhara",
        email: "karandudhara@gmail.com",
        phone: "9987486775",
        password:
          "$2a$10$Mj8UniPt0bW6Yw0mauOW1eft8RlzNJbS7WBvYFiTzjQMoNxEZP7A6",
        access: {
          products: {
            create: true,
            edit: false,
            delete: false,
            publish: false,
            view: false,
            hide: false,
          },
          categories: {
            create: true,
            edit: false,
            delete: false,
            view: false,
            publish: false,
          },
          subcategories: {
            create: true,
            edit: false,
            delete: false,
            view: false,
            publish: false,
          },
          users: { create: true, edit: true, delete: false, view: false },
          stores: { create: true, edit: true, delete: false, view: false },
        },
        state: 2,
      },
      {
        createdAt: "2022-06-22T09:52:55.262Z",
        updatedAt: "2022-06-22T09:54:52.000Z",
        id: 17,
        name: "hkjjkhkjhkj",
        email: "abdgmail.com",
        phone: "kjhkhkh",
        password:
          "$2a$10$7eQq5niEjUxPhKNeu9JCa.RrFVH.SYR6xb.EF2ImJvTd2Cze4IyM2",
        access: {
          products: {
            create: false,
            edit: false,
            delete: false,
            publish: false,
            view: false,
            hide: false,
          },
          categories: {
            create: false,
            edit: false,
            delete: false,
            view: false,
            publish: false,
          },
          subcategories: {
            create: false,
            edit: false,
            delete: false,
            view: false,
            publish: false,
          },
          users: { create: false, edit: false, delete: false, view: false },
          stores: { create: false, edit: false, delete: false, view: false },
        },
        state: 2,
      },
      {
        createdAt: "2022-06-26T16:33:02.233Z",
        updatedAt: "2022-06-26T16:33:02.233Z",
        id: 18,
        name: "only user",
        email: "user@test.com",
        phone: "3434454544",
        password:
          "$2a$10$xt2eZpuKyenLvZDLLjKo1ulc8zylIKGWLdk2ub453ABlzfV7GGasm",
        access: {
          products: {
            create: false,
            edit: false,
            delete: false,
            publish: false,
            view: false,
            hide: false,
          },
          categories: {
            create: false,
            edit: false,
            delete: false,
            view: false,
            publish: false,
          },
          subcategories: {
            create: false,
            edit: false,
            delete: false,
            view: false,
            publish: false,
          },
          users: { create: true, edit: true, delete: true, view: true },
          stores: { create: false, edit: false, delete: false, view: false },
        },
        state: 2,
      },
      {
        createdAt: "2022-06-28T05:31:54.731Z",
        updatedAt: "2022-06-29T01:49:40.194Z",
        id: 19,
        name: "Naman",
        email: "naman@email.com",
        phone: "1234567890",
        password:
          "$2a$10$VZO24r06nb2GmQA1leT5jeAndPDNfvTnOBSiQu7rEWw5XlxTcc.nW",
        access: {
          products: {
            create: true,
            edit: false,
            delete: false,
            publish: false,
            view: true,
            hide: false,
          },
          categories: {
            create: true,
            edit: false,
            delete: false,
            view: true,
            publish: false,
          },
          subcategories: {
            create: true,
            edit: false,
            delete: false,
            view: true,
            publish: false,
          },
          users: { create: true, edit: false, delete: false, view: true },
          stores: { create: false, edit: false, delete: false, view: false },
        },
        state: 3,
      },
      {
        createdAt: "2022-07-04T11:02:39.277Z",
        updatedAt: "2022-07-04T11:05:44.683Z",
        id: 20,
        name: "Rohan Patwa",
        email: "rohan@gmail.com",
        phone: "1251269857",
        password:
          "$2a$10$pJcEHDk9XF0blbdCda6/Iu4rMoEsxSI6Nw53mpgpVvcZ1q9U/xIOy",
        access: {
          products: {
            create: true,
            edit: false,
            delete: false,
            publish: false,
            view: true,
            hide: false,
          },
          categories: {
            create: false,
            edit: false,
            delete: false,
            view: false,
            publish: false,
          },
          subcategories: {
            create: false,
            edit: false,
            delete: false,
            view: false,
            publish: false,
          },
          users: { create: false, edit: false, delete: false, view: false },
          stores: { create: false, edit: false, delete: false, view: false },
        },
        state: 2,
      },
      {
        createdAt: "2022-07-04T11:06:41.721Z",
        updatedAt: "2022-07-04T11:06:41.721Z",
        id: 21,
        name: "Disha Patel",
        email: "disha@gmail.com",
        phone: "1234512345",
        password:
          "$2a$10$CMv3qNv.xxGQZ1t76wBczu5p0VKWULHbeyGUTjDP7obThRvdJDzBi",
        access: {
          products: {
            create: true,
            edit: false,
            delete: false,
            publish: false,
            view: true,
            hide: false,
          },
          categories: {
            create: false,
            edit: false,
            delete: false,
            view: false,
            publish: false,
          },
          subcategories: {
            create: false,
            edit: false,
            delete: false,
            view: false,
            publish: false,
          },
          users: { create: false, edit: false, delete: false, view: false },
          stores: { create: false, edit: false, delete: false, view: false },
        },
        state: 2,
      },
    ];
    for (let d of data) {
      try {
        var product = await User.create(d).fetch();
      } catch (err) {
        console.log(err);
      }
    }
    return product;
  },
};
