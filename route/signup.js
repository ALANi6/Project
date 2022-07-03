const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const {sequelize} = require("../models/index");
 
router.get('/', function(req, res) {
  res.send('respond with a resource');
});
 
 
router.post('/', async(req, res )=>{
    res.status(201).json(req.body);

  const salt = await bcrypt.genSalt(10);
  const usr = {
    username : req.body.username,
    email : req.body.email,
    password : await bcrypt.hash(req.body.password, salt)
  };
  created_user = await User.create(usr);
  res.status(201).json(created_user);
});
 
module.exports = router;