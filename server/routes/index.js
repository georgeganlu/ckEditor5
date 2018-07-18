var express = require('express');
var router = express.Router();
const path = require('path');
const fs = require('fs');

// var multer = require('multer')
// 使用multer来设置存储的位置。
// let multerObj = multer({
//   dest:'./storage/'
// });

var multipart = require('connect-multiparty');
var multipartMiddleware = multipart({
  uploadDir:'./storage'
});
// multerObj.array('file',12)
router.post('/picture', multipartMiddleware, (req, res) => {
  console.log(req.files);
  var files = req.files.upload;  
  let oldpath=files.path;
  let newpath= `storage`+"\\"+ files.name;
  // let fileName = files.filename + path.parse(files.originalname).ext;
  let fileName = files.name;
  fs.rename(oldpath, newpath, (err) => {
    if (!err) {
      let fangStr = `http://192.168.12.51:3002/${fileName}`;
      res.json({        
          "uploaded": true,
          "url": fangStr    
      });
    }
  });  
});

router.get('/test', (req, res) => {
  res.json({
    code:0,
    data:'234234'
  });
});
module.exports = router;
