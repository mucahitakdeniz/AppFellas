"use strict";

const jwt = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  const auth = req.headers?.authorization || null;
  const tokenKey = auth ? auth.split(" ") : null;

  if (tokenKey) {
    if (tokenKey[0] === "Bearer" && tokenKey[1]) {
      jwt.verify(tokenKey[1], process.env.ACCESS_KEY, (err, userData) => {
        if (err) {
          return res.status(403).json({ error: "Invalid or expired token" });
        }
        req.user = userData;
        next();
      });
    } else {
      return res.status(401).json({ error: "Invalid authorization format" });
    }
  }
  else {
    next();
  }
  
};
