const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProductInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title : "";
  data.make = !isEmpty(data.make) ? data.make : "";

  if (!Validator.isLength(data.title, { min: 5, max: 30 })) {
    errors.title = "Title must be between 5 and 30 characters";
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = "Title is mandatory";
  }

  if (Validator.isEmpty(data.make)) {
    errors.make = "Make is mandatory";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
