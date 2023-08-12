/* eslint-disable no-undef */
require("dotenv").config();

module.exports = {
  development: {
    client: "mysql",
    connection: {
      host: process.env.MYSQL_HOST,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DB,
      port: process.env.MYSQL_PORT,
      typeCast: function (field, next) {
        if (field.type == "TINY" && field.length == 1) {
          return field.string() == "1"; // 1 = true, 0 = false
        }
        return next();
      },
    },
    pool: {
      min: 2,
      max: 10,
    },
    debug: true,
    migrations: {
      tableName: "knex_migrations",
      directory: __dirname + "/migrations",
    },
    seeds: {
      directory: __dirname + "/seeds",
    },
  },
};
