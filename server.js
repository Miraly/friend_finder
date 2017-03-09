var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// // htmlRoutes without creating var first just adding call
require("./app/routing/htmlRoutes")(app);

var apiRoutes = require("./app/routing/apiRoutes");
apiRoutes(app);


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static(path.join(__dirname,'app/public')));


app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

