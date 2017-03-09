var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var fs = require("fs");


module.exports = function (app) {
	app.post("/new_friend", function(req, res) {
	  var newFriend = req.body;
	  //console.log(newTable);
	  //console.log(JSON.stringify(newTable));
	  write(newFriend);
	  // res.redirect("/match");

	 });

  	function write(newFriend) {
		fs.appendFile("friends_data.txt", JSON.stringify(newFriend), function(err) {
	    if(err) {
	        return console.log(err);
	    }

	    console.log("Friend added!");
		}); 
 	};

};

