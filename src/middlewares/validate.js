const Joi = require('joi');

const validations = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  whenDate: Joi.date().required(),
  duration: Joi.string().required(),
}).messages({
  'any.required': '{{#label}} is required',
});

const validate = (req, _res, next) => {
  const { error } = validations.validate(req.body, { abortEarly: false });
  if (error) {
    const erro = { status: 400, message: error.message }; 
    throw erro;
  }  
  next();
};

module.exports = validate;