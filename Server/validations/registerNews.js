const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateNewsInput(data) {
  let errors = {};
  data.title = !isEmpty(data.title) ? data.title : "";
  data.description = !isEmpty(data.description) ? data.description : "";
  data.url = !isEmpty(data.url) ? data.url : "";
  data.urlToImage = !isEmpty(data.urlToImage) ? data.urlToImage : "";
  

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title field is required";
  }
  if (Validator.isEmpty(data.description)) {
    errors.description = "Description field is required";
  }
  if (Validator.isEmpty(data.url)) {
    errors.url = "Url field is required";
  }
  if (Validator.isEmpty(data.urlToImage)) {
    errors.urlToImage = "Url to image field is required";
  }
 

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
