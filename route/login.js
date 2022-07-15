const router = require("express").Router();
const { loginController } = require("../control/logincontrol");

router.get("/", loginController);

module.exports = router;
