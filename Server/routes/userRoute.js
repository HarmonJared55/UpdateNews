const express = require("express");
const bcrypt = require("bcryptjs");
const secretKeys = require("../config/keys.config").secretOrKey;
const jwt = require("jsonwebtoken");
const router = express.Router();
const validateUserInput = require("../validations/registerUser");
const User = require("../models/user");

router.get("/all", (req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch();
});

router.post("/register", (req, res) => {
  const { errors, isValid } = validateUserInput(req.body);
  if (!isValid) {
    res.status(400).json(errors);
  }

  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    isAdmin: req.body.isAdmin,
  });

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;

      newUser.password = hash;
      newUser
        .save()
        .then((data) => {
          res.json(data);
        })
        .catch();
    });
  });
});

router.post("/login", (req, res) => {
  const { name } = req.body;
  const { password } = req.body;

  User.findOne({ name })
    .then((user) => {
      if (!user) {
        res.status(400).json({ msg: "user not found" });
      }

      bcrypt.compare(password, user.password).then((isMatch) => {
        if (isMatch) {
          const payload = {
            id: user._id,
            name: user.name,
            isAdmin: user.isAdmin,
          };
          jwt.sign(payload, secretKeys, { expiresIn: 6000 }, (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token,
            });
          });
        } else {
          res.status(400).json({ msg: "not loggedin" });
        }
      });
    })
    .catch();
});
module.exports = router;
