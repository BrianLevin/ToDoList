

const express = require("express");

const bodyParser = require("body-parser");


const app = express();


app.get("/", function(req, res){

var today = new Date();
var currentDay =  today.getDay();

if (today.getDay() == 6 || today.getDay() == 0 ){

res.send(" <h1>It's the weekend!</h1>")
} else{
res.send("<h1>I have work.</h1>")

}

});


app.listen(3000, function () {
    console.log("Server is running on port 3000!");
  });