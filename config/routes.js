/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {
  /***************************************************************************
   *                                                                          *
   * Make the view located at `views/homepage.ejs` your home page.            *
   *                                                                          *
   * (Alternatively, remove this and add an `index.html` file in your          *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  "/": { action: "index" },

  //PRODUCTS
  "GET /products/": { action: "product/view-all" },
  "GET /products/:id": { action: "product/view-one" },
  "POST /products/create": { action: "product/create" },
  "POST /products/update/:id": { action: "product/update" },

  //USERS
  "GET /user/": { action: "user/view-all" },
  "GET /user/:id": { action: "user/view-one" },
  "POST /user/update/:id": { action: "user/update" },
  "POST /user/register": { action: "user/register" },
  "POST /user/login": { action: "user/login" },
  "POST /user/reset-password": { action: "user/reset-password" },

  //CATEGORIES
  "GET /categories/": { action: "category/view-all" },
  "GET /categories/:id": { action: "category/view-one" },
  "GET /categories/parents/": { action: "category/view-parents" },
  "GET /categories/:id/children/": { action: "category/view-children" },
  "POST /categories/create": { action: "category/create" },
  "POST /categories/update/:id": { action: "category/update" },

  //STATES
  "GET /states/": { action: "state/view-all" },
  "POST /states/create": { action: "state/create" },
  "POST /states/update/bulk/": { action: "state/bulk-update" },

  //TRASH
  "GET /trash/": { action: "trash/get-trash" },
  "PATCH /trash/": { action: "trash/restore-trash" },
  "DELETE /trash/": { action: "trash/delete-trash" },

  //STORE
  "GET /store/": { action: "store/view" },
  "GET /store/:id": { action: "store/view" },
  "POST /store/": { action: "store/create" },
  "PATCH /store/:id": { action: "store/update" },
  "DELETE /store/": { action: "store/delete" },

  //TAG
  "GET /tag/": { action: "tag/view" },
  "GET /tag/:id": { action: "tag/view" },
  "POST /tag/": { action: "tag/create" },
  "PATCH /tag/:id": { action: "tag/update" },
  "DELETE /tag/": { action: "tag/delete" },

  //COMIC
  "GET /comic/": { action: "comic/view" },
  "GET /comic/:id": { action: "comic/view" },
  "POST /comic/": { action: "comic/create" },
  "PATCH /comic/:id": { action: "comic/update" },
  "DELETE /comic/": { action: "comic/delete" },

  //SECTION
  "GET /section/:type": { action: "section/view" },
  "GET /section/:type/:id": { action: "section/view" },
  "POST /section/": { action: "section/create" },
  "PATCH /section/:id": { action: "section/update" },
  "DELETE /section/": { action: "section/delete" },

  //LEAD
  "GET /lead/": { action: "lead/view" },
  "POST /lead/": { action: "lead/create" },
  "PATCH /lead/:id": { action: "lead/update" },

  //BANNER
  "GET /banner/": { action: "banner/view" },
  "POST /banner/": { action: "banner/create" },




  //WEBSITE
  "GET /banner/": { action: "website/banner/view" },



  //OTHERS
  "GET /index/": { controller: "UploadController", action: "index" },
  "POST /upload/": { controller: "UploadController", action: "upload" },

  "GET /bulk/": { action: "product/insert-bulk" },

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                     *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it    *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};
