var express = require('express');
var router = express.Router();
let $console = require('Console');

let a = 'value A';
let b = 'value B';
$console.log(a, b);
$console.log('This is a LOG message');
$console.debug('This is a DEBUG message');
$console.error('This is a ERROR message');
$console.warn('This is a WARN message');
$console.stress('This is a STRESS message');
$console.success('This is a SUCCESS message');

/* GET home page. */
router.get('/', function(req, res, next) {
  if(1 === 1){res.render('index', { title: 'Express' });}
  else{res.send('respond with a resource');}
});

module.exports = router;
