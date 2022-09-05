const Joi = require("joi");

const postSchema = Joi.object({
  first_name: Joi.string().max(30).required(),
  last_name: Joi.string().max(30).required(),
  email: Joi.string().email().required(),
  number: Joi.string(),
  gender: Joi.string(),
  photo: Joi.string(),
});

let service = Joi.object().keys({
  first_name: Joi.string().max(30).required(),
  last_name: Joi.string().max(30).required(),
  email: Joi.string().email().required(),
  number: Joi.string(),
  gender: Joi.string(),
  photo: Joi.string(),
});

let services = Joi.array().items(service);

const responseSchema = Joi.object().keys({
  id: Joi.string(),
  first_name: Joi.string().max(30).required(),
  last_name: Joi.string().max(30).required(),
  email: Joi.string().email().required(),
  number: Joi.string(),
  gender: Joi.string(),
  photo: Joi.string(),
});

module.exports = { postSchema, services, responseSchema };
