const Joi = require('joi');

const register = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    credit: Joi.number().required(),
    username: Joi.string().required(),
  }),
};


module.exports = {
  register
};
