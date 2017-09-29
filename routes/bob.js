var express = require('express');
var router = express.Router();
var user_name = require('./config.json').menu;


router.get('/', function(req, res, next) {
  res.render('index', {});
});
// Sends available menus
router.post('/register/services/bob',function (req,res,next) {
  var name_path = req.body.date.replace('/','')
  var array = [];
  
 
    for(let  i = 0, len = user_name.length; i < len; i++){
      
       if(user_name[i].allow.length === 1 && user_name[i].allow == name_path ){
           
        array.push( user_name[i].name );
        
       } else
           if(user_name[i].allow.length > 1){ 
               
            for(let j = 0, length = user_name[i].allow.length; j < length; j++){
  
              if( user_name[i].allow[j] === name_path ){
  
              array.push( user_name[i].name );
                  
              }
            }
           } else 
               if(user_name[i].allow.length > 2){
                   console.log('the argument is more than two')
               } else {}
               
           }
        res.send(JSON.stringify(array))
})
module.exports = router;
