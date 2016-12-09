# c37 NodeJS+PostGres Backend Seed Project

## Introduction

This repo is designed to demonstrate a nodeJS backend. The idea is looking at the examples in this repo to help you build out your own to support your application. The design is explained in more detail below but set up so you don't need to completely understand how it works to get your application up and running. But we challenge you to understand the code, try to improve it, or maybe add tests!

## Getting things up and running
(This assumes you have a cloud9 account!)

To get setup the project in cloud9 you will need to do the following:

1. Create a new workspace. Fill out the details and make sure to put the `https` github url in **"Clone from Git or Mercurial URL"** and choose the `node.js` template. Check out [workspace creation](docs/images/creating_a_workspace) for more detail. Once you finish you should see the following:

  > ![Fill this out!](docs/images/created_workspace.png)

2. In the bash (blue window in picture above) you need to run `npm install`. This command will install all the dependencies listed in the `package.json` file into `/node_modules` directory. Please do not modify files in this folder and if you want to learn more about [package.json](https://docs.nodejitsu.com/articles/getting-started/npm/what-is-the-file-package-json) you should!

3. You will need to have a `config.js` in your `/backend` directory. **You do not need to worry about this. We will provide you with this file.** This file will need to look like the following:

  > ```javascript
  > 'use strict';

  > const heroku = {
  >    DATABASE_CONNECTION_URL : "postgres://username:password@heroku-postgres-host:heroku-postgres-port/heroku-database-name?ssl=true"
  > };

  > module.exports = heroku;
  > ```

4. Now you should be able to start the application by running `npm start` in the bash **(It is important that you run this from the top level directory).** The application has some relative paths that depend on the command running on in this directory.

5. Get excited because you are done! Click on the `Preview` --> `Preview Running Application` in the menu bar. This will open up a window with the url you can use to access your application!


## Deeper Dive into the project

I tried to separate different concepts into sections. If you are looking for more information on specific pieces of the project check out the sections below.

[The `/frontend` folder]('docs/frontend.md')
\- an introduction to the frontend folder

[The `/backend` folder]('docs/backend.md')
\- an introduction to the backend folder

[Using the postgres database]('docs/postgres.md')
\- an introduction to using postgres

[JavaScript]('docs/helpful_js.md')
\- Helpful JS concepts

[More about HTTP requests]('docs/making_http_requests.md')
\- an introduction to using postgres
