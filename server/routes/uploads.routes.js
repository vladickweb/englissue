const express = require("express");
const router = express.Router();

const uploader = require('../config/cloudinary.config')

router.post('/image', uploader.single("imageData"), (req, res) => {

  if (!req.file) {
    res.status(500).json({ code: 500, message: 'Error loading the file' })
    return
  }
  
  console.log("🚀 ~ file: uploads.routes.js ~ line 14 ~ router.post ~ req.file.path", req.file.path)
  res.json({ cloudinary_url: req.file.path })
})


module.exports = router