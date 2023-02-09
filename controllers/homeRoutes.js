const router = require("express").Router();
const sequelize = require("../config/connection");
const { Trip, User, Comment } = require("../models");

// GET all trips for homepage
router.get("/", async (req, res) => {
  try {
    const dbTripData = await Trip.findAll({
      attributes: ["id", "title", "created_at", "trip_content"],
      include: [
        {
          model: Comment,
          attributes: ['id','user_id','trip_id','comment_text','created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        {
          model: User,
          attributes: ["username"],
        },
      ],
    });

    const trips = dbTripData.map((trip) => trip.get({ plain: true }));

    console.log("======================");
    console.log(trips);
    console.log(trips[0].id);
    console.log(trips[0].title);
    console.log(trips[0].trip_content);

    // ./views/homepage.handlebars ->
    // ./views/layouts/main.handlebars
    res.render('homepage', {
      trips,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// Login & Signup route
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  // ./views/login.handlebars ->
  // ./views/layouts/main.handlebars
  res.render("login");
});

module.exports = router;
