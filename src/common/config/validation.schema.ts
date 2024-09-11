import * as joi from 'joi';

export const validationSchema = joi
  .object({
    DATABASE_URL: joi.string().required(),
  })
  .unknown(true);
