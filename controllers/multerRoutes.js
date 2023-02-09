const router = require('express').Router();
const multer = require('multer')

const storage = multer.diskStorage({
    destination: (req, file, cb) => { 
      cb(console.error(), 'images')
    },
      filename: (req, file, cb) => {
      console.log(file)
      cb(null, Date.now() + path.extname(file.originalname))
    }
  })
  
  const upload = multer({storage: storage})

router.get('/upload', (req, res) => {
    res.render("upload")
})

router.post('/upload', upload.single('image'), (req, res) => {
    res.send('Image uploaded')
})

module.exports = router;