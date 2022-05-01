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
   * (Alternatively, remove this and add an `index.html` file in your         *
   * `assets` directory)                                                      *
   *                                                                          *
   ***************************************************************************/

  "/": { view: "pages/homepage" },

  //PRODUCTS
  "GET /products/": { action: "product/view-all" },
  "POST /products/create": { action: "product/create" },
  "POST /products/update/:id": { action: "product/update" },

  //USERS
  "GET /users/": { action: "user/view-all" },
  "POST /users/create": { action: "user/create" },

  //CATEGORIES
  "GET /categories/": { action: "category/view-all" },
  "GET /categories/parents/": { action: "category/view-parents" },
  "GET /categories/:id/children/": { action: "category/view-children" },
  "POST /categories/create": { action: "category/create" },
  "POST /categories/update/:id": { action: "category/update" },

  //STATES
  "GET /states/": { action: "state/view-all" },
  "POST /states/create": { action: "state/create" },

  /***************************************************************************
   *                                                                          *
   * More custom routes here...                                               *
   * (See https://sailsjs.com/config/routes for examples.)                    *
   *                                                                          *
   * If a request to a URL doesn't match any of the routes in this file, it   *
   * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
   * not match any of those, it is matched against static assets.             *
   *                                                                          *
   ***************************************************************************/
};
