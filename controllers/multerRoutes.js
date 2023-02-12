const router = require('express').Router();
const multer = require('multer')
const path = require('path')

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
    res.send('Image uploaded')
})

module.exports = router;