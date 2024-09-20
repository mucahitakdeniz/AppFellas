"use strict";

const router = require("express").Router();

// routes/:

// auth:
router.use("/auth", require("./authRouter"));


module.exports = router;
