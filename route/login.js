const express = require("express");
const router = express.Router();
const bcrypt=require("bcrypt")
const jwt = require("jsonwebtoken");
const {sequelize} = require("../models/index");
const {User} = require("../models/user");

router.post('/',async(req,res)=>{
 const user = await User.findOne({ where : {email : req.body.email }});
 if(user){
    const password_valid = await bcrypt.compare(req.body.password,user.password);
    if(password_valid){
        token = jwt.sign({ "id" : user.id,"email" : user.email },process.env.SECRET);
        res.status(200).json({ token : token });
    } else {
      res.status(400).json({ error : "Password Incorrect" });
    }
  
  }else{
    res.status(404).json({ error : "User does not exist" });
  }
  
  });
  module.exports = router;