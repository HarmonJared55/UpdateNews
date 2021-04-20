const express = require("express");
const router = express.Router();
const validateNewsInput = require("../validations/registerNews");
const News = require("../models/news");

router.get("/all", (req, res) => {
  News.find()
    .then((news) => res.json(news))
    .catch();
});
router.get("/allRegularNews", (req, res) => {
  News.find({"isSports":false})
    .then((news) => res.json(news))
    .catch();
});
router.get("/allSportsNews", (req, res) => {
  News.find({"isSports":true})
    .then((news) => res.json(news))
    .catch();
});
router.get("/latestThree", (req, res) => {
  News.find({"isSports":false}).sort({"publishedAt":-1}).limit(3)
    .then((news) => res.json(news))
    .catch();
});
router.get("/latestThreeSports", (req, res) => {
  News.find({"isSports":true}).sort({"publishedAt":-1}).limit(3)
    .then((news) => res.json(news))
    .catch();
});

router.delete("/delete", (req, res) => {
  const {_id} = req.body;
  News.remove({_id})
    .then((news) => res.json(news))
    .catch();
});

router.get("/find", (req, res) => {
  const{_id}=req.body;
console.log("News Route: " + JSON.stringify(req.body));
  News.findOne({_id})
    .then((news) => res.json(news))
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
    isSports: req.body.isSports
  });

  newNews
    .save()
    .then((data) => {
      res.json(data);
    })
    .catch();
});

module.exports = router;
