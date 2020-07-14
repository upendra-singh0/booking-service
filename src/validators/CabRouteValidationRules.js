// sample file for validation

const { body, oneOf, param } = require('express-validator');

const post = () => [
  body('key').exists().withMessage('key is required'),
  body('value').exists().withMessage('value is required'),
];

const validateCreateCoupon = () => [
  body('couponCode', "Coupon Code doesn't exists").exists(),
  body('couponType', "Coupon Type doesn't exists").exists(),
  body('title', "Title doesn't exists").exists(),
  body('description', "Description doesn't exists").exists(),
  body('validity.start', "Start Validity doesn't exists").exists(),
  body('validity.end', "End Vaidity doesn't exists").exists(),
];

const validateAddFilters = () => {
  const validateCouponCode = param('couponCode', "Coupon Code doesn't exists").exists();
  const customerFilter = [
    body('customerFilter.all').isBoolean(),
    body('customerFilter.nonTransacted').isBoolean(),
    body('customerFilter.customerList').isArray(),
  ];
  const productFilter = [
    body('productFilter.all').isBoolean(),
    body('productFilter.categoryList').isArray(),
    body('productFilter.productIdList').isArray(),
  ];
  const minPrice = body('minPrice').isInt();
  const minUnit = body('minUnit').isInt();
  return [validateCouponCode, oneOf([customerFilter, productFilter, minPrice, minUnit])];
};

const validateUpdateState = () => [body('Todo some validations here')];

const validateDeactivate = () => [body('Todo some validations here')];

module.exports = {
  post,
  validateCreateCoupon,
  validateAddFilters,
  validateUpdateState,
  validateDeactivate,
};
