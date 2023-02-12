const router = require('express').Router();
const multer = require('multer')
const path = require('path')

// Not sure if bodyparser is necessary or if it should be included here or in server.js
// const bodyparser = require('body-parser')
// app.use(bodyparser.json())
// app.use(bodyparser.urlencoded({
//     extended: true
// }))

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
    const imgsrc = process.env.DB_HOST + '/images/' + req.file.filename
  }
    res.send('Image uploaded')
})

module.exports = router;