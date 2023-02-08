const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');

// GET all posts for homepage
router.get('/', async (req, res) => {
  try {
    const dbPostData = await Post.findAll({
      attributes:['id','title','created_at','post_content'],
      include: [
        /*
        {
          model: Comment,
          attributes: ['id','comment_text','post_id','user_id','created_at'],
          include: {
            model: User,
            attributes: ['username']
          }
        },
        */
        {
          model: User,
          attributes: ['username']
        }
      ],
    });

    const posts = dbPostData.map((post) =>
      post.get({ plain: true })
    );

    console.log("======================");
    console.log(posts);
    console.log(posts[0].id);
    console.log(posts[0].title);
    console.log(posts[0].post_content);
    
    // ./views/homepage.handlebars -> 
    // ./views/layouts/main.handlebars
    /*
    res.render('homepage', {
      posts,
      loggedIn: req.session.loggedIn,
    });
    */
    console.log('jw2');
    res.render('homepage', {
      posts
    });
    console.log('jw3');
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
  console.log('jw4');
});


// Login route
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // ./views/login.handlebars -> 
  // ./views/layouts/main.handlebars
  res.render('login');
});
