const mongoose=require('mongoose');
const movieModel=require('../models/movieModel');
exports.movieList=async(req,res)=>
{
    try{
        const movies=await movieModel.find({});
        res.status(200).json(movies);
    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

exports.getMovie=async(req,res)=>{
    try{
        const movie=await movieModel.findById(req.params.id);
        if(!movie){
            return res.status(404).json({message:"Movie not found"});
        }   
        res.status(200).json(movie);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}