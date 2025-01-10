require('dotenv').config();

module.exports = {
  development: {
    dialect: 'postgres',
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_DATABASE,
    // host: process.env.DB_HOST,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialectOptions: {
      ssl: {
        require: true, // Requiere SSL
        rejectUnauthorized: false, // Si es un certificado auto-firmado
      },
    },
  },
  test: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
      ssl: {
        require: true, // Requiere SSL
        rejectUnauthorized: false, // Si es un certificado auto-firmado
      },
    },
  },
  production: {
    dialect: 'postgres',
    // username: process.env.DB_USERNAME,
    // password: process.env.DB_PASSWORD,
    // database: process.env.DB_DATABASE,
    // host: process.env.DB_HOST,
    username: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE,
    host: process.env.PGHOST,
    dialectOptions: {
      ssl: {
        require: true, // Requiere SSL
        rejectUnauthorized: false, // Si es un certificado auto-firmado
      },
    },
  },
};
