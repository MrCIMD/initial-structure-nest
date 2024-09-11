import { Config } from './config.type';

export default (): Config => {
  return {
    DATABASE_URL: process.env.DATABASE_URL,
  };
};
