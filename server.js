var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// htmlRoutes
var htmlRoutes = require("./app/routing/htmlRoutes");

htmlRoutes(app);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));
app.use(express.static('app/public'));

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/home.html"));
});

app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "app/public/survey.html"));
});

app.get("/new_friend", function(req,res){

});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});