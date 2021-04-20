const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dbURL = require("./config/db.config").mongoURI;
const users = require("./routes/userRoute");
const news = require("./routes/newsRoute");
const app = express();
const port = 3000;

// connect with mongodb
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("mongodb connected");
  })
  .catch((err) => {
    console.log(JSON.stringify(err));
  });

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "PUT, POST, GET, DELETE, OPTIONS");
  next();
});
app.use(bodyParser.json());

app.use("/api/users/", users);
app.use("/api/news/", news);

app.listen(port, () => {
  console.log("server started at port: " + port);
});
