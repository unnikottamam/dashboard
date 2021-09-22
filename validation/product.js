const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateProductInput(data) {
  let errors = {};

  data.make = !isEmpty(data.make) ? data.make : "";
  data.model = !isEmpty(data.model) ? data.model : "";
  data.year = !isEmpty(data.year) ? data.year : "";
  data.price = !isEmpty(data.price) ? data.price : "";

  if (Validator.isEmpty(data.make)) {
    errors.make = "Make is mandatory";
  }

  if (Validator.isEmpty(data.model)) {
    errors.model = "Model is mandatory";
  }

  if (Validator.isEmpty(data.year)) {
    errors.year = "Year is mandatory";
  }

  if (Validator.isEmpty(data.price)) {
    errors.price = "Price is mandatory";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
