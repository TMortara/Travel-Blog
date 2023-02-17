# Wanderlust Travel Blog

# Deployed Application
https://quiet-everglades-33653.herokuapp.com/

## 1. Table of Contents

- [Description](#2-description)
- [Installation](#3-installation)
- [Usage](#4-usage)
- [File Structure](#5-file-structure)
- [Built With](#6-built-with)
- [License](#7-license)
- [Screenshots](#8-screenshots)
- [Credits](#9-credits)
- [Questions](#10-questions)

## 2. Description

The Wanderlust Travel Blog allows users to add and edit trips to ensure all their memories are kept in one place. On the site users can add new trips, edit existing trips, and delete trips that may not have happened or that you want to forget. Within the trips, users can also upload images for their trip and create a daily log within each of their trips.

## 3. Installation

Please make sure to have following programs installed on your computer to use this application:

- [VS Code](https://code.visualstudio.com/download)
- [Git](https://github.com/git-guides/install-git)
- [Node.js](https://nodejs.org/en/)
- [MySQL](https://www.mysql.com/)

To use this application, `git clone` the repo down to your local. Then, run `npm install` in order to install the dependencies as specified in the `package.json` (bcrypt, body-parser, connect-session, dotenv, express, express-handlebars, express-session, multer, mysql2, nodemon, sequelize) will be installed. Now, you are ready to go!

## 4. Usage

To use this application, follow the instruction below:

- First, run `npm install` on your terminal, then it will install the required `npm` packages.
- Second, let's create the database - `travel_db`:
  - `mysql -u root -p`: login to `MySQL` then type the following commends:
  - `source ./db/schema.sql;`: this will create `travel_db`
  - `show databases;`: Now, you will see `travel_db` in the `Database` list
  - `use travel_db;`: it is empty now.
  - `show tables`: there is no tables yet.
  - `exit`: exit the mysql terminal
- Third, let's include tables in the database we just created, `travel_db`:
  - `node ./seeds/seed.js` or `npm run seed`: these will insert the following tables in the `travel_db`:
    - `comment`
    - `daily`
    - `image`
    - `trip`
    - `user`
- Now, let's run the program:
  - Set an Environmental Variable in `./.env` file:
    - `touch .env`: this will create `./.env` file
    - Now, add the following lines in `./.env`
      - DB_NAME="travel_db"
      - DB_USER="root"
      - DB_PASSWORD="your_mysql_password"
      - DB_HOST='localhost' OR '127.0.0.1'
  - Then, run the program with one of the following approaches:
    - `node server.js` or `npm run start`: these will start `node` program in normal way.
    - `npm run nodemon`: this will start `node` program with `nodemon`, which monitors the project directory and automatically restarts your node application when it detects any changes.
  - Now, check the results in your localhost:
    - localhost:3003/

## 5. File Structure

The directory for this application is as follows:

- ./assets: project workthrough video & supporting materials
- ./config: this will allow you to connect to the `mysql` database
- ./controllers: these javascript files will create (or define) each route's behavior
- ./db: this will create a database, `travel_db`, with empty tables.
- ./models: these javascript files will create `Sequelize` models for each table in `travel_db`
- ./Public: css style files and additional javascript files
- ./seeds: these javascript files will create (seed) tables in `travel_db`
- ./utils: helper files to use handlebars
- ./views: Express-Handlebars related files
- ./env: Environmental variable definitions
- ./.gitignore: specifies intentionally untracked files that Git should ginore
- ./LICENSE: MIT License
- ./package.json: specifics of npm's package.json handling
- ./server.js: main node.js program Javascript file
- ./README.md: readme file

## 6. Built With:

![CSS](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E) ![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white) ![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white) ![MySQL](https://img.shields.io/badge/MySQL-005C84?style=for-the-badge&logo=mysql&logoColor=white) ![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white) ![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white) ![Handlebars](https://img.shields.io/badge/Handlebars.js-f0772b?style=for-the-badge&logo=handlebarsdotjs&logoColor=black)

Also used to build this application:

- bcrypt
- multer
- Bulma

## 7. License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## 9. Screenshots
### Homepage of Application
![quiet-everglades-33653 herokuapp com_](https://user-images.githubusercontent.com/107971753/219549268-3918ab45-10a5-4b86-b782-70f33e30d0de.png)

### Login Page - User will have to login to view Dashboard, create/edit/delete trips, or comment on trips
![quiet-everglades-33653 herokuapp com_login](https://user-images.githubusercontent.com/107971753/219549400-a409989f-9b4f-4de2-ac24-f6dad1a1d824.png)

### Register Page - User will have to register an account before accessing the Dashboard
![quiet-everglades-33653 herokuapp com_signup](https://user-images.githubusercontent.com/107971753/219549575-9ee3d1a2-e847-4404-9154-e542893b8908.png)

### Dashboard - Users will only see their trips and be able to create new trips, view trip details, edit their trip, or comment on the trip 
![quiet-everglades-33653 herokuapp com_dashboard](https://user-images.githubusercontent.com/107971753/219549731-fbfdef6c-30de-4440-b7d0-386f04464520.png)

### Edit or Delete Trip - From the Home or Dashboard page, Users can edit or delete an exisiting trip
![Screen Shot 2023-02-16 at 10 36 39 PM](https://user-images.githubusercontent.com/107971753/219550513-0151db4c-428e-4730-9594-1cff09f50a20.png)

### Comments - Users can view comments and comments on trips after logging in or registering
![quiet-everglades-33653 herokuapp com_trip_5](https://user-images.githubusercontent.com/107971753/219549962-0464d8d4-6d30-4107-acc7-29796201cae6.png)

### View Trip Details - Users can view trip details once logged in 
![Screen Shot 2023-02-16 at 10 33 55 PM](https://user-images.githubusercontent.com/107971753/219550197-439b5418-245d-4233-a2e5-af5697119dc2.png)

### Add Daily Trip Notes - Users can add daily trip notes and upload photos to their daily trip notes
![quiet-everglades-33653 herokuapp com_api_trip-details_1_add-daily](https://user-images.githubusercontent.com/107971753/219550302-3bc41da1-9f70-4342-bdcb-ccaf87df7e21.png)

![Screen Shot 2023-02-16 at 10 36 11 PM](https://user-images.githubusercontent.com/107971753/219550456-cf1bb2de-7f08-4d4b-9f80-c3d9e012d3a8.png)





<img src="public\screenshots\travel-blog-homepage.png" width="400"/>

<img src="public\screenshots\travel-blog-login.png" width="400" />

<img src="public\screenshots\travel-blog-mytrips.png" width="400" />

<img src="public\screenshots\travel-blog-trip-details.png" width="400" />

<img src="public\screenshots\travel-blog-daily-notes.png" width="400" />

## 10. Credits

- Torre for all the support in getting our application running.
- Jason, Awais, Bradley, and Walter for answering all of our questions and letting us stay late to finish things up for the night.

## 11. Questions?:

If you have any questions, feel free to contact one of our team members via information below:<br>

- Tracy Mortara:
  - [Github:] https://github.com/TMortara
- Jungwoo Lee:
  - [GitHub:] https://github.com/jungwoo33<br>
  - [Email:] jungwoo33@gmail.com
- Koby Sillito:
  - [GitHub:] https://github.com/KobyS82/
- Riley O'Bryan
  - [GitHub:] https://github.com/rmob<br>
  - [Email:] riley.obryan@gamil.com
- Kaylon Myers
