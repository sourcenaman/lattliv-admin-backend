module.exports = {


  friendlyName: 'View',


  description: 'View product.',


  inputs: {
    state: {
      type: "string"
    },
    type: {
      type: "string"
    }
  },


  exits: {

  },


  fn: async function (inputs) {
    let state = null
    if (inputs.state && inputs.type){
      state = await State.find({ name: inputs.state }).populate(inputs.type);
    }
    else if (inputs.state){
      state = await State.find({ name: inputs.state }).populate("products").populate("categories");
    }
    else if (inputs.type){
      await State.find().populate(inputs.type);
    }
    else{
      state = await State.find().populate('products').populate('categories');
    }
    return state;

  }


};
