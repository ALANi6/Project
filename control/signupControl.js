const {sequelize} = require("../models/index")
const bcrypt = require("bcrypt")
const {User} = require("../models/user")

function Signupcontrol(req, res) {
   
    const { username, email, password } = req.body;
    if (!username || !email || !password)
      res.status(400).json({ message:"User does not registration" });
    else {
      signup(req, username, email, password);
    }
  }

  async function signup(req, username, email, password) {
    const user = await sequelize.models.User.findOne({
        where: { email: email },
      });
      if(!user){
    res.status(201).json({message:"created_user"});
      }
  }
  
  module.exports = {
    Signupcontrol,
  };