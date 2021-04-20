const express = require("express");
const router = express.Router();
const validateNewsInput = require("../validations/registerNews");
const News = require("../models/news");

router.get("/all", (req, res) => {
  News.find()
    .then((newss) => res.json(newss))
    .catch();
});

router.post("/register", (req, res) => {
  const { errors, isValid } = validateNewsInput(req.body);
  if (!isValid) {
    res.status(400).json(errors);
  }

  const newNews = new News({
    title: req.body.title,
    description: req.body.description,
    url: req.body.url,
    urlToImage: req.body.urlToImage,
    publishedAt: req.body.publishedAt,
    isSports: req.body.isSports,
  });

  newNews
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch();
});

module.exports = router;
