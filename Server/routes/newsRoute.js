const express = require("express");
const router = express.Router();
const validateNewsInput = require("../validations/registerNews");
const News = require("../models/news");
const params = require("params");

router.get("/all", (req, res) => {
  News.find().sort({"publishedAt":-1})
    .then((news) => res.json(news))
    .catch();
});
router.get("/allRegularNews", (req, res) => {
  News.find({"isSports":false}).sort({"publishedAt":-1})
    .then((news) => res.json(news))
    .catch();
});
router.get("/allSportsNews", (req, res) => {
  News.find({"isSports":true}).sort({"publishedAt":-1})
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

router.delete("/delete/:_id", (req, res) => {
  const _id = req.params._id;
  console.log("Deleting: " + _id);
  News.deleteOne({_id})
    .then(res.json("Deleted successfully"))
    .catch();
});

router.get("/find/:_id", (req, res) => {
  const _id = req.params._id;
  console.log("News Route: " + _id);
  News.findOne({_id})
    .then((news) => res.json(news))
    .catch();
}); 

router.get("/findLimited/:count", (req, res) => {
  const count = +req.params.count;
  console.log("News Route: " + count)
  News.find().sort({"publishedAt":-1}).limit(count)
    .then((news) => res.json(news))
    .catch();
}); 

router.put("/update", (req, res) => {
  console.log("Updating: " + JSON.stringify(req.body));
  News.update({'_id':req.body._id}, {$set:{'title':req.body.title, 'description':req.body.description}})
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