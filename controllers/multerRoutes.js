const router = require('express').Router();
const multer = require('multer')
const path = require('path')
require("dotenv").config();
const sequelize = require('../config/connection');
// Not sure if bodyparser is necessary or if it should be included here or in server.js
// const bodyparser = require('body-parser')
// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({
//     extended: true
// }))
const PORT = 3000;
const storage = multer.diskStorage({
    destination: (req, file, cb) => { 
      cb(console.error(), 'images')
    },
      filename: (req, file, cb) => {
      console.log(file)
      cb(null, Date.now() + path.extname(file.originalname))
    }

  })
  
  const upload = multer({storage: storage});

router.get('/', (req, res) => {
    res.render("upload")
})

router.post('/', upload.single("image"), (req, res) => {
  if(!req.file) {
    console.log("no file upload");
  } else {
    console.log(req.file.filename)
    console.log(req.file)
    const imgsrc = 'http://' + process.env.DB_HOST + ':' + PORT + '/images/' + req.file.filename
    // Everything above this sequelize code works, uploads image to images folder but not DB
    console.log(imgsrc)
    var insertData = "INSERT INTO image(file_src)VALUES(?)";
    sequelize.literal(insertData, [imgsrc], (err) => {
      if (err) throw err;
      console.log('file uploaded')
    })
  }
    res.send('Image uploaded')
})

module.exports = router;