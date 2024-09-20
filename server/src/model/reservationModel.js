"use strict";

const { mongoose } = require("../configs/dbConnection");

const FlightClassSchema = new mongoose.Schema({
    class: {
      type: String,
      enum: ['main', 'comfort','deltaOne', 'first'],
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  });

const ReservationSchema = new mongoose.Schema(
  {
    flightNumber: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    flightId: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    airline: {
      type: String,
      trim: true,
      required: true,
    },
    departure: {
      type: String,
      trim: true,
      required: true,
    },
    departureDate: {
      type: Date,
      required: true,
    },
    arrival: {
      type: String,
      trim: true,
      required: true,
    },
    arrivalDate: {
      type: Date,
      required: true,
    },
    flightDuration: { type: Number }, 
    isNonstop: { type: Boolean, default: true },
    flightClasses: [FlightClassSchema],
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  { collection: "flights", timestamps: true }
);

ReservationSchema.pre('save', function(next) {
  if (this.arrivalDate && this.departureDate) {
    const duration = (this.arrivalDate - this.departureDate) / (1000 * 60); 
    this.flightDuration = duration;
  }
  next();
});

module.exports = mongoose.model("Reservation", ReservationSchema);
