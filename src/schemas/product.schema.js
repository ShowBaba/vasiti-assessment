const Joi = require('joi');

// TODO: add schema as middleware
const productSchema = Joi.object().keys({
  product_name: Joi.string().required(),
  product_description: Joi.string().required(),
  product_varieties: Joi.array()
    .items({
      size: Joi.string(),
      color: Joi.string(),
      images: Joi.array(),
      quantity: Joi.string(),
      price: Joi.string(),
    })
    .required(),
  date_uploaded: Joi.date().required(),
  date_edited: Joi.date().required(),
});

module.exports = productSchema;
