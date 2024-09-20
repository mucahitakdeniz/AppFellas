"use strict";

const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
  full_name: {
    type: String,
    trim: true,
    unique: true,
    required: true,
  },
  email: { type: String, required: true, unique: true },
  password: {
    type: String,
    trim: true,
    validate: {
      validator: function (value) {
        return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&.,:;_+/-]).{8,}$/.test(
          value
        );
      },
      message:
        "The password must be at least 8 characters long and contain uppercase letters, lowercase letters, numbers and special characters.",
    },
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    required: true,
  },
  profile_photo: {
    type: String,
    trim: true,
  },
});

// Şifreyi kaydetmeden önce hashle
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

// Profil fotoğrafı kontrolü
UserSchema.pre("save", function (next) {
    if (!this.profile_photo) {
      if (this.gender === "male") {
        this.profile_photo = "https://sh22-vologda-r19.gosweb.gosuslugi.ru/netcat_files/8/148/net_foto.jpg"; 
      } else if (this.gender === "female") {
        this.profile_photo = "https://avatars.mds.yandex.net/i?id=21437dd229d5a75d09078d7b7aea18cbe1d3559f-8910959-images-thumbs&n=13"; 
      }
    }
    next();
  });

// Şifre doğrulama metodu
UserSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};

const User = mongoose.model("User", UserSchema);
module.exports = User;
