const express=require('express');
const router=express.Router();
const {movieList, getMovie}=require('../controllers/movieController');


router.get('/movies',movieList);
router.get('/movies/:id',getMovie);
module.exports=router;