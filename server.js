    
var express = require("express");
 
var app = express();

var path = require("path");

//make way for some custom css, js and images
app.use('/', express.static(__dirname + '/public/', {
  extensions: ['html', 'htm']
}));

var server = app.listen(8080, function(){
    var port = server.address().port;
    console.log("Server started at http://localhost:%s", port);
});

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/public/index'));
  //__dirname : It will resolve to your project folder.
});