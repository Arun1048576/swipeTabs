var express = require('express');
var app = express();
var fs = require('fs');

app.set('port', (process.env.PORT || 5000));
app.use(express.static(__dirname + '/public'));

app.get('/', function(request, response) {
  fs.readFile("index.html", function(err, html) {
		response.write(html);
		response.end();
  })
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});
