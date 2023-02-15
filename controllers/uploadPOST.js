const router = require('express').Router();
const multer = require('multer')
const path = require('path')
require("dotenv").config();
const sequelize = require('../config/connection');
const Image = require('../models/Image')

const PORT = 3003;
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => { 
//       cb(console.error(), path.join(__dirname, '../public/multer_img/'))
//     },
//       filename: (req, file, cb) => {
//       console.log(file)
//       cb(null, Date.now() + path.extname(file.originalname))
//     }

//   })
  
// const upload = multer({storage: storage});

// router.get('/', async (req, res) => {
    
//     const pictures = await Image.findAll({
//       attributes: ['file_src'],
//     })
//     const pictureInfo = pictures.map(image => image.get({
//       plain: true
//     }))
//     console.log(pictureInfo, 'pictureInfo for GET')
//     res.render('upload', {pictureInfo})
   

// })

router.post('/', upload.single("image"), async (req, res) => {
  if(!req.file) {
    console.log("no file upload");
  } else {

    const imgsrc = 'http://' + process.env.DB_HOST + ':' + PORT + '/multer_img/' + req.file.filename
    // const imgsrc = req.file.filename
    
    console.log(imgsrc, 'inserting data in database')

    var insertData = `INSERT INTO image (file_src) VALUES (?)`;
    sequelize.query(insertData, {replacements:[imgsrc]}, (err) => {
      if (err) {
        console.log(err);
        throw err;
      }
      console.log('file uploaded')
    })
   
    
  }

  const pictures = await Image.findAll({
    attributes: ['file_src'],
  })
  const pictureInfo = pictures.map(image => image.get({
    plain: true
  }))
  console.log(pictureInfo, 'pictureInfo for after database insertion')
  res.render('upload', {pictureInfo})
})

module.exports = router;