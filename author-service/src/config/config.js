const dotenv = require('dotenv');
dotenv.config();

/**
 * Configuration for sequelize CLI
 */
 module.exports = {
  "development": {
    "username": process.env.PG_USER,
    "password": process.env.PG_PASS,
    "database":  process.env.PG_DB,
    "host": process.env.PG_HOST,
    "port": 5432,
    "dialect": "postgres",
    "pool": {
      "max": 5,
      "min": 0,
      "idle": 10000
    }
  },
  "test": {
    "username": process.env.PG_USER,
    "password": process.env.PG_PASS,
    "database":  process.env.PG_DB,
    "host": process.env.PG_HOST,
    "port": 5432,
    "dialect": "postgres",
    "pool": {
      "max": 5,
      "min": 0,
      "idle": 10000
    }
  }
}