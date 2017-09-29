var express = require('express');
var router = express.Router();
var user_name = require('./config.json').users;

router.get('/', function(req, res, next) {
  res.render('index', {});
  
});
// Checking login
router.post('/register/services/reg',function (req,res,next) {
  
  switch (  req.body.login ) {
    case user_name[0]:
      res.send(JSON.stringify('/'+ user_name[0]))
        break;
    case user_name[1]:
    console.log(req.body)
      res.send(JSON.stringify('/'+ user_name[1]))
       
        break;
    case user_name[2]: 
      res.send(JSON.stringify('/'+ user_name[2]))
  
        break;
    default:
      console.log('not registered')
        break;
}
  console.log(req.body)
  res.send(date)
  
})

module.exports = router;
