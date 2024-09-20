"use strict";

const router = require("express").Router();

// routes/:

// auth:
router.use("/auth", require("./authRouter"));
router.use("/flight", require("./reservationRouter"));


module.exports = router;
