# Travel-Blog
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)  

## 1. Table of Contents
- [Description](#2-description)
- [Installation](#3-installation)
- [Usage](#4-usage)
- [File Structure](#5-file-structure)
- [Built With](#6-built-with)
- [License](#7-license)
- [Recording](#8-recording)
- [Screenshots](#9-screenshots)
- [Credits](#10-credits)
- [Questions](#11-questions)

## 2. Description

## 3. Installation
Please make sure to have following programs installed on your computer to use this app:
+ [VS Code](https://code.visualstudio.com/download)
+ [Git](https://github.com/git-guides/install-git)
+ [Node.js](https://nodejs.org/en/)
+ [MySQL](https://www.mysql.com/)

To use this program, `git clone` the repo down to your local. Then, run `npm install` in order to install the `npm` package dependencies as specified in the `./package.json` - `Express.js`, `mysql2`, `sequelize`, and `dotenv` will be installed. Now, you are ready to go!

## 4. Usage
To use this application, follow the instruction below: 
+ First, run `npm install` on your terminal, then it will install the required `npm` packages.
+ Second, let's create the database - `travel_db`:
  + `mysql -u root -p`: login to `MySQL` then type the following commends:
  + `source ./db/schema.sql;`: this will create `travel_db`
  + `show databases;`: Now, you will see `travel_db` in the `Database` list
  + `use travel_db;`: it is empty now.
  + `show tables`: there is no tables yet.
  + `exit`: exit the mysql terminal
+ Third, let's include tables in the database we just created, `travel_db`:
  + `node ./seeds/seed.js` or `npm run seed`: these will insert the following tables in the `travel_db`:
    + `comment`
    + `daily`
    + `image`
    + `trip`
    + `user`
+ Now, let's run the program:
  + Set an Environmental Variable in `./.env` file:
    + `touch .env`: this will create `./.env` file
    + Now, add the following lines in `./.env`
      + DB_NAME="travel_db"
      + DB_USER="root"
      + DB_PASSWORD="your_mysql_password"
      + DB_HOST='localhost'
  + Then, run the program with one of the following approaches:
    + `node server.js` or `npm run start`: these will start `node` program in normal way. 
    + `npm run nodemon`: this will start `node` program with `nodemon`, which monitors the project directory and automatically restarts your node application when it detects any changes.
  + Now, check the results in your localhost: 
    + localhost:3003/

## 5. File Structure
The directory for this application is as follows:
+ ./assets: project workthrough video & supporting materials
+ ./config: this will allow you to connect to the `mysql` database
+ ./controllers: these javascript files will create (or define) each route's behavior 
+ ./db: this will create a database, `travel_db`, with empty tables.
+ ./models: these javascript files will create `Sequelize` models for each table in `travel_db`
+ ./Public: css style files and additional javascript files
+ ./seeds: these javascript files will create (seed) tables in `travel_db`
+ ./utils: helper files to use handlebars
+ ./views: Express-Handlebars related files
+ ./env: Environmental variable definitions
+ ./.gitignore: specifies intentionally untracked files that Git should ginore
+ ./LICENSE: MIT License 
+ ./package.json: specifics of npm's package.json handling
+ ./server.js: main node.js program Javascript file
+ ./README.md: readme file

## 6. Built With:
![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)

## 7. License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 8. Recording

## 9. Screenshots

## 10. Credits
## 11. Questions?:
If you have any questions, feel free to contact one of our team members via information below:<br>
+ Tracy Mortara:
+ Jungwoo Lee:
   + [GitHub:] https://github.com/jungwoo33<br>
   + [Email:] jungwoo33@gmail.com
+ Koby Sillito:
+ Riley O'Bryan
+ Kaylon Myers
