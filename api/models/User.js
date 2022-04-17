/**
 * User.js
 *
 * A user who can log in to this application.
 */

module.exports = {

  attributes: {
    name: {
    type: 'string',
    required: true,
  },
  email: {
    type: 'string',
    // required:true,
    unique: true,
  },
  country: {
    type: 'string',
    allowNull: true,
  },
},


};
