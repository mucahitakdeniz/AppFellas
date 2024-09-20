"use strict";

const jwt = require("jsonwebtoken");
const User = require("../model/userModel");

module.exports = {
  register: async (req, res) => {
    const { username, email, password } = req.body;

    try {
      const user = await User.create({ username, email, password });

     

      res.status(201).json({
        username: user.username,
        email: user.email,
        token: accessToken,
      });
    } catch (error) {
      res.status(400).json({ message: "Invalid user data" });
    }
  },
  login: async (req, res) => {
    const { email, password } = req.body;

    try {
      const user = await User.findOne({ email });

      if (user && (await user.matchPassword(password))) {
        const accessToken = jwt.sign(
          { _id: user._id, email: user.email, username: user.username },
          process.env.ACCESS_KEY,
          {
            expiresIn: "60m",
          }
        );
        res.json({
          _id: user._id,
          username: user.username,
          email: user.email,
          token: accessToken,
        });
      } else {
        res.status(401).json({ message: "Invalid email or password" });
      }
    } catch (error) {
      res.status(400).json({ message: "Invalid login credentials" });
    }
  },
};
