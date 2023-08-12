# Ilham API UPSCALE Test

project ini merupakan assessment test untuk UPSCALE dengan menggunakan Expressjs dan MYSQL yang terdiri dari beberapa Library diantaranya:

- [Knex (Query Builder)](https://knexjs.org/)
- [Objection.JS (ORM)](https://vincit.github.io/objection.js/)
- [Morgan (Logging Middleware)](https://www.npmjs.com/package/morgan)
- [Express-Joi-Validation (request validation)](https://github.com/evanshortiss/express-joi-validation)
- [Mocha (test framework)](https://mochajs.org/)
- [Chai & Chai-Http (test api)](https://www.chaijs.com/)
- [swagger-ui-express (Swagger API Documentation)](https://github.com/scottie1984/swagger-ui-express)

## Installation

Clone Repository & Install with npm

```bash
  git clone https://github.com/ucuncs89/ilham-api-upscale.git
  cd ilham-api-upscale
  npm install
```

## Running Server

Development with watching

```bash
    npm run dev
```

Production without watching

```bash
    npm run start
```

## Env

edit file .env

example :

    PORT=4000
    MYSQL_HOST=0.0.0.0
    MYSQL_USER=root
    MYSQL_PASSWORD=asdf1234
    MYSQL_DB=db_test
    MYSQL_PORT=3306

## Migration table

karena project ini menggunakan knex maka sebelum melakukan migration harus install knex secara global dengan perintah

```bash
 npm install knex -g
```

Run all migrations that have not yet been run.

```bash
    npm run migration:latest
```

## Running Server

bila ingin menjalankan server lakukan perintah :

```bash
    npm run start
```

## Test API with mocha and chai

bila ingin melakukan testing bisa menggunakan perintah

```bash
    npm run test
```

## Documentation Rest API

untuk melihat Documentation OpenAPI Swagger api, bisa mengunjungi URL

```bash
    localhost:4000/api-docs
```
