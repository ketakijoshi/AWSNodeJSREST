var express = require('express');
var http = require('http')
var app = express();

app.set('port', process.env.PORT || 8081);


app.get('/calc/:action/:id1/:id3', function(req, res) {

//calc/:action/:id1/:id3
     if(req.params.action == "add")
      {
        result:req.params.result = (Number)(req.params.id1 || "0") + (Number)(req.params.id3 || "0"); 
      }
      
      if(req.params.action == "subtract")
      {
        result:req.params.result = (Number)(req.params.id1 || "0") - (Number)(req.params.id3 || "0");
      }

      if(req.params.action == "multiply")
      {
          result:req.params.result = (Number)(req.params.id1 || "0") * (Number)(req.params.id3 || "0");
      }

      if(req.params.action == "divide")
      { 
        result:req.params.result = (Number)(req.params.id1 || "0") / (Number)(req.params.id3 || "0");
      }

      if(req.params.action == "pow")
      {
        result:req.params.result = (Number)(req.params.id1 || "0") ^ (Number)(req.params.id3 || "0");
      }

      if(req.params.action == "mod")
      {
        result:req.params.result = (Number)(req.params.id1 || "0") % (Number)(req.params.id3 || "0") ;
      }

      //res.writeHead(200);
      //res.write("hi world");
      res.send({result:req.params.result});      
    
});


/*app.get('/calc/:action/:id1', function(req, res){
    if(req.params.action == "factorial")
    {
      result:req.params.result = (Number)(req.params.id1 || "0")!;
    }
    res.send({result:req.params.result});
});
*/


app.listen(app.get('port'), '0.0.0.0');
//console.log('Listening on port 3000...');
