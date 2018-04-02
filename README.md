# [Setting Up An Express API](https://github.com/jamesktruitt/farm-animals-api)

Express is a Node.js web-framework that accelerates development of web-server applications. The primary function of a web-server is to store, process, and deliver web pages to clients. Basic middleware pattern for declarative routing!

* [ ] Create, Read, Update, Delete - CRUD
* [ ] "Point Guards Play Defense" - Post, Get, Put, Delete \(RESTful APIs\)
* [ ] Create a new directory for your Express server and run
* [ ] Initialize a new repo with `git init`
* [ ] `npm init -Y` to start a new project and create your `package.json`
* [ ] Install your production dependencies with `npm i -S express cors morgan dotenv knex body-parser pg`
* [ ] Install your development dependencies with `npm i -D nodemon mocha supertest`
* [ ] Add `start` and `dev` scripts to your `package.json`
* [ ] `touch index.js app.js` index.js will be used to run you app.js logic
* [ ] Add `.env` and `node_modules` to your `.gitignore`
* [ ] Write an `app.js` file that initializes Express and uses the `cors`, `body-parser`, and `morgan` middleware, and exports app as a module, see farm-animals-api for reference
* [ ] Write an `index.js` file that requires the `app.js` module and listens for requests on a configured port or port 3000 `app.listen(process.env.PORT || 3000)`
* [ ] Write basic data model and routes for testing \(launch Postman\) to be sure that your app.js logic is "wired up"
* [ ] Write 404 \(Page Not Found\) and 500 \(Internal Server Error\) error handlers
* [ ] Make a directory called `models` and a `models/name_of_model.js` file and extract your basic data model from `app.js` \(Kyle's working backwards method\)
* [ ] Remember to Promisify your returned data functions w/ Promise.resolve\(\)
* [ ] Use `npm run dev` to run your server and continue to re-configure app.js as you write and test methodically. Remember thin vertical cake slices.

## Setting Up Postgres

* [ ] `knex init` to make a new `knexfile.js`
* [ ] Use `createdb` to make a new database
* [ ] Save the name of the database in your `.env` file
* [ ] Delete the extra keys on `knexfile.js` and configure the development object to use `pg` and point to the database you named in your `.env`
* [ ] Create a database connection file that reads your `knexfile.js` and uses it to export a `knex` database connection
* [ ] Make a new Heroku app
* [ ] Add or confirm that the Heroku app's `git` URL in your `git` remotes
* [ ] Push your app to Heroku
* [ ] Add the Heroku Postgres add-on to your Heroku app
* [ ] Copy the database URL from Heroku to your `.env`
* [ ] Add a production object to your `knexfile.js`, enabling SSL
* [ ] Commit your changes and deploy to Heroku

## Setup testing

* [ ] Add a `tests` folder
* [ ] Add a `test` script to your `package.json`

## Adding a route to an Express API

* [ ] Add a test spec to your `tests` folder
* [ ] Write a test specifying what your route should return
* [ ] Add a route handler to your `app.js` or route file
* [ ] Hard-code the response to make the test pass \(make it asynchronous\)
* [ ] Add a model file for the data
* [ ] Add and export a method on the model that returns the hard-coded data
* [ ] Import the model into the route and use the model's method to access and return the data
* [ ] Create a migration with `knex migrate:make`
* [ ] Put the schema for your data in the generated migration file
* [ ] Run your migration locally with `knex migrate:latest`
* [ ] Run your migration in production with `knex migrate:latest --env production`
* [ ] Create a seed with `knex seed:make`
* [ ] Put sample data in the generated seed file
* [ ] Run your seeds locally with `knex seed:run`
* [ ] Run your seeds in production with `knex seed:run --env production`
* [ ] Update your model's method to use the database connection to return the data instead of the hardcoded data
* [ ] Deploy your changes to production



