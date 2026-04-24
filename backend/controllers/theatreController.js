const theatreModel=require('../models/theatreModel.js');
exports.getTheatre=async(req,res)=>{
    try{
        const theatres=await  theatreModel.find({});
        res.status(200).json(theatres);

    }
    catch(err){
        res.status(500).json({message:err.message});
    }
}

exports.getTheatreById=async(req,res)=>{
    try{
        const data=await theatreModel.findById(req.params.id);
        if(!data){
            return res.status(404).json({message:"Theatre not found"});
        }
        res.status(200).json(data);
    }catch(err){
        res.status(500).json({message:err.message});
    }
}
