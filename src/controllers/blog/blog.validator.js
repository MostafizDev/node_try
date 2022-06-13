const Joi = require('joi');


export const blog = {
  body: {
    title: Joi.string().required(),
    description: Joi.string().required(),
  },
};

