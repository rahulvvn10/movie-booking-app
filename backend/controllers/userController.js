const bcrypt=require('bcrypt');
const mongoose=require('mongoose');
const jwt=require('jsonwebtoken');
const user=require('../models/userModel');
const salt=10;
exports.register=async(req,res)=>{
    try{
    const {name,lastName,email,password}=req.body;
    
    const hashedpassword=await bcrypt.hash(password,salt);
    const newUser=await user.create({
        name,
        lastName,
        email,
        password:hashedpassword
    });
    res.status(201).json({name,lastName,email});
    }
    catch(err){
        res.status(500).json({message:err.message})
    }

}

exports.login=async(req,res)=>{
    try{
        const {email,password}=req.body;
        const User=await user.findOne({email});
        if(!User){
            return res.status(404).json({message:"No user with the given email"})
        }
        const match=await bcrypt.compare(password,User.password);
        
        if(!match){
           return res.status(401).json({message:"Password not matched"});
        }


        const token=jwt.sign({
            id:User._id,
        sameSite: "lax"},
            process.env.JWT_SECRET,
            
            {expiresIn:"7d"}
        )
          res.cookie("token", token, {
      httpOnly: true,   
      secure: false,   
      
      maxAge: 7*24 * 60 * 60 * 1000 
    });
    res.status(200).json({message:"Login successful!!","user":{
        name:User.name,
        email:User.email
    }})
    }

    catch(err){
        res.status(500).json({message:err.message});
    }
}


exports.loadUser = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Not authenticated" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    const User = await user.findById(req.user.id).select("-password");
  res.status(200).json({ user: User });
  } catch (err) {
    return res.status(401).json({message:err.message});
  }
};

exports.logout=async(req,res)=>{
    try{
    res.clearCookie("token", {
    httpOnly: true,
    sameSite: "strict",
    secure: true
  });
  res.status(200).json({message:"Logged out successfully"});
}
catch(err){
    res.status(500).json({message:err.message});
}

}