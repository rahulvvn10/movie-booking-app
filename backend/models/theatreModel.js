const mongoose=require('mongoose');
const theatreSchema=new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    description: { type: String },
  location: { type: String },
  screens: { type: Number },
  facilities: [{ type: String }],
  parkingAvailable: { type: Boolean }
});
const theatreModel=mongoose.model('Theatre',theatreSchema);
module.exports=theatreModel;