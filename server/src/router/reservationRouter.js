"use strict";

const reservationController = require('../controller/reservationController');
const router = require("express").Router();


router.post('/createreservation', reservationController.createReservation);

module.exports = router;
