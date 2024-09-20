"use strict";

const Reservation = require("../model/reservationModel");

module.exports.createReservation = async (req, res) => {
  try {
    const reservation = await Reservation.create({ ...req.body, userId: req.user._id });

    res
      .status(201)
      .json({ message: "Reservation created successfully", reservation });
  } catch (error) {
    res.status(400).json({ message: "Failed to create reservation", error });
  }
};
