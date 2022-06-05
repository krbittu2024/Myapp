var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/data', function(req, res, next) {
   res.send('Hello')
  //res.render('index', { title: 'Express' });
});
router.get('/', function(req, res, next) {
  console.log(req.query)
  // res.json({name:req.query.fname})
  res.render('student', { title: req.query.fname });
});

module.exports = router;