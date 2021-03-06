const createError = require("http-errors")
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path")
const cors = require("cors");
const userlogin = require("./route/login");
const usersignup = require("./route/signup");
const authorize = require("./route/authorization");
const {sequelize} = require("./models/index");
require("dotenv").config;

const app = express();
const port = process.env.PORT || 3000;



app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cors());
app.use('/login',userlogin);
app.use('/signup',usersignup);
app.use('/auth',authorize);

app.use((err, req, res, next) => {
    console.log(err);
   err.statusCode = err.statusCode || 500;
   err.message = err.message || "Internal Server Error";
   res.status(err.statusCode).json({
     message: err.message,
   });
});


sequelize.sync({force: false });

app.listen(port, ()=> console.log(`server is running on port ${port}`))
