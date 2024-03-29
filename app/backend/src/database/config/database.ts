import 'dotenv/config';
import { Options } from 'sequelize';

const config: Options = {
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PASS || '123456',
  database: process.env.DB_NAME || 'TRYBE_FUTEBOL_CLUBE',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 3002,
  dialect: 'mysql',
  dialectOptions: {
    // timezone: 'Z',
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  // logging: false,
}

module.exports = config;
