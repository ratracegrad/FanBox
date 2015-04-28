var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

app.configure(function () {
  app.use(
      "/", 
      express.static(__dirname) 
  );
});
app.listen(port); 
console.log("Server running on port: " + port + "/\nCTRL + C to shutdown");