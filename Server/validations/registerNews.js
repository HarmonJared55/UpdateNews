const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateNewsInput(data) {
  let errors = {};
  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.url = !isEmpty(data.url) ? data.url : "";
  data.story = !isEmpty(data.story)? data.story: "";
  data.urlToImage = !isEmpty(data.urlToImage) ? data.urlToImage : "";
  data.publishedAt = !isEmpty(data.publishedAt) ? data.publishedAt : "";
  

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }
  if (Validator.isEmpty(data.url)) {
    errors.url = "Url field is required";
  }
  if (Validator.isEmpty(data.story)) {
    errors.story = "Story field is required";
  }
  if (Validator.isEmpty(data.urlToImage)) {
    errors.urlToImage = "Url to image field is required";
  }
  if (Validator.isEmpty(data.publishedAt)) {
    errors.publishedAt = "Published at field is required";
  }
 

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
