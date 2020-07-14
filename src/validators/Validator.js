const { validationResult } = require('express-validator');
const HttpResponse = require('../util/libs/HttpResponse');

const validate = (req, res, next) => {
  const errors = validationResult(req);
  if (errors.isEmpty()) {
    return next();
  }
  const extractedErrors = [];
  console.log(errors);
  errors.array().map((err) => extractedErrors.push({ [err.param]: err.msg }));
  return HttpResponse.badRequest(req, res, extractedErrors);
};

module.exports = {
  validate,
};
