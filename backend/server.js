const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors');
const cookieParser=require('cookie-parser');
require("dotenv").config({ path: "./config.env" });
const movie=require('./routes/movieRoute');
const theatre=require('./routes/theatreRoute');
const food=require('./routes/foodRoute');
const user=require('./routes/userRoute');
const app=express();
app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use('/api',movie);
app.use('/api',theatre);
app.use('/api',food);
app.use('/api',user);
mongoose.connect('mongodb://localhost:27017/moviesdb')
.then(()=>console.log('MongoDB connected'))
.catch(err=>console.log(err));
app.listen(process.env.PORT||5007,()=>console.log(`Server running on port ${process.env.PORT}`));