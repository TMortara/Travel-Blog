const router = require('express').Router();

router.get('/upload', (req, res) => {
    res.render("upload")
})

router.post('/upload', upload.single('image'), (req, res) => {
    res.send('Image uploaded')
})

module.exports = router;