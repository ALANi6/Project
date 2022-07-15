const router = require("express").Router();
const { Signupcontrol } = require("../control/signupControl");

router.post("/", Signupcontrol);

module.exports = router;
