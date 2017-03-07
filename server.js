var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// // htmlRoutes
// var htmlRoutes = require("./app/routing/htmlRoutes");

// htmlRoutes(app);

// // var apiRoutes = require("./app/routing/apiRoutes");

// // apiRoutes(api);


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

app.post("/new_friend", function(req, res) {
  var newFriend = req.body;
  //console.log(newTable);
  //console.log(JSON.stringify(newTable));
  write(newFriend);
  res.end();
  res.redirect("/match");
});

app.post("/match", function(req, res) {
	
});

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

function write(newFriend) {
	fs.appendFile("friends_data.txt", JSON.stringify(newFriend), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("Friend added!");
	}); 
};