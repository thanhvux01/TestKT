const mongoose = require('mongoose');
const { Schema } = mongoose;

const ProductSchema = new Schema({
      productID: {type : String,required:true,unique:true},
      name: {type : String,required:true},
      price:{type:Number,default:0},   
      imgURL:{type:String},
      number:{type:Number,default:0},
});


module.exports = mongoose.model('Products',ProductSchema);
