const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema for Business
let Water = new Schema({
  
  pname: {
    type: String,
    required:true
    
  },
  price: {
    type: Number,
    
  },

  image:{
    type: String,
    required:true
  }
},{
    collection: 'Water'
});

module.exports = mongoose.model('Water', Water);
