
const path = require("path");
const express = require("express");
var bodyParser = require('body-parser');
const app = express(); // create express app
var person =require("./Data");

// add middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(express.static(path.join("http://localhost:3000")));
app.use(express.static("public"));
// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, "..", "build", "index.html"));
//   });


app.post('/Contacts/', function(req, res) {
  console.log('receiving data ...');
  var person = {
    "personid": req.body.id,
    "name": req.body.name,
    "mail": req.body.email,
    "disc": req.body.disc
}
persons.push(person)
  console.log('body is ',req.body);
  res.send(req.body);
});
// start express server on port 5000
app.listen(5000, () => {
  console.log("server started on port 5000");
});
