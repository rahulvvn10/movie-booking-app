const mongoose=require('mongoose');
const foodSchema=new mongoose.Schema({
     name:{type:String,required:true},
     price:{type:Number,required:true},
     image:{type:String}
});
const foodModel=mongoose.model('food',foodSchema);
module.exports=foodModel;