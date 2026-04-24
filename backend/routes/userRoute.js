const express=require('express');
const { register, login, loadUser, logout } = require('../controllers/userController');
const router=express.Router();
router.post('/register',register);
router.post('/login',login);
router.get('/load',loadUser);
router.post('/logout',logout);
module.exports=router;