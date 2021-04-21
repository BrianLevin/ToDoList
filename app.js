

const express = require("express");

const bodyParser = require("body-parser");


const app = express();

app.use("view engine", "ejs");


app.get("/", function(req, res){

var today = new Date();
var currentDay =  today.getDay();

var day = "",
if (today.getDay() == 6 || today.getDay() == 0 ){
    day = "Weekend";

    res.render("list", {kindOfDay: day});

res.write(" <h1>It's the weekend!</h1>");
} else{
    day= "Weekday"
res.sendFile(__dirname + "/index.html")

}

});


app.listen(3000, function () {
    console.log("Server is running on port 3000!");
  });