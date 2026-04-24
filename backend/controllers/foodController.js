
const foodModel=require('../models/foodModel');
const mongoose=require('mongoose');
exports.getFoods=async(req,res)=>{
    try{
        const data=await foodModel.find({});
        res.status(200).json(data);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}