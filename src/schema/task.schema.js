const Joi = require("joi");
exports.querySchema = Joi.object({
  page: Joi.number().default(1),
  page_size: Joi.number().default(10),
  search: Joi.string(),
});
exports.paramsSchema = Joi.object({
  id: Joi.number(),
});
exports.bodySchema = Joi.object({
  title: Joi.string().required(),
  description: Joi.string(),
  is_complete: Joi.boolean().default(false),
});
