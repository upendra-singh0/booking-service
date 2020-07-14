const { body, oneOf, param } = require('express-validator');

const couponValidationRules = () => {
  return body('couponCode')
    .exists()
    .withMessage("Coupon Code doesn't exist")
    .trim()
    .isAlphanumeric()
    .withMessage('Coupon Code is not Alphanumeric')
    .isLength({
      min: 6,
      max: 12,
    })
    .withMessage('Coupon Code length has to be between 6 to 12 characters');
};

const couponTypeValidationRules = () => {
  return body('couponType')
    .exists()
    .isIn(['NORMAL_DISCOUNT', 'BUY_X_GET_Y']) // We can move the enum to a common place (common)
    .withMessage("Coupon type doesn't belong to the specified type");
};

const titleValidationRules = () => {
  return body('title', "Title doesn't exists").exists();
};

const descriptionValidationRules = () => {
  return body('description', "Description doesn't exists").exists();
};

const validityValidationRules = () => {
  return [
    body('validity.start', "Start Validity doesn't exists").exists(),
    body('validity.end', "End Vaidity doesn't exists").exists(),
  ];
};

const createCouponValidationRules = () => [
  couponValidationRules(),
  couponTypeValidationRules(),
  titleValidationRules(),
  descriptionValidationRules(),
  validityValidationRules(),
];

const validateAddFilters = () => {
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
  return [couponValidationRules(param), oneOf([customerFilter, productFilter, minPrice, minUnit])];
};

const verifyCouponValidationRules = () => [body('Todo some validations here')];

const validateUpdateState = () => [body('Todo some validations here')];

const validateDeactivate = () => [body('Todo some validations here')];

module.exports = {
  createCouponValidationRules,
  verifyCouponValidationRules,
  validateAddFilters,
  validateUpdateState,
  validateDeactivate,
};
