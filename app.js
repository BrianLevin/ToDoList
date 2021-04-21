

const express = require("express");

const bodyParser = require("body-parser");


const app = express();


app.get("/", function(req, res){

var today = new Date();
var currentDay =  today.getDay();

if (today.getDay() == 6 || today.getDay() == 0 ){

res.write(" <h1>It's the weekend!</h1>");
} else{
res.write("<p>I have work.</p>");
res.write("<h1>It's not the weekend.</h1>")
res.send();

}

});


app.listen(3000, function () {
    console.log("Server is running on port 3000!");
  });