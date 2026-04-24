const express=require('express');
const {getTheatre, getTheatreById}=require('../controllers/theatreController');
const router=express.Router();
router.get('/theatres',getTheatre);
router.get('/theatres/:id',getTheatreById);
module.exports=router;