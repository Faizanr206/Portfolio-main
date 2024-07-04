
const path = require("path");
const express = require("express");
var bodyParser = require('body-parser');
const app = express(); // create express app
const persons = require("./Data.jsx");
// add middlewares
app.use(bodyParser.urlencoded({ extended: false }));
app.set('view engine', 'ejs');

app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname, "../public/index.html")));
app.use(express.static(path.join("http://localhost:3000")));
// app.use(express.static("public"));
// app.use((req, res, next) => {
//     res.sendFile(path.join(__dirname, "../build/", "index.html"));
//   });
app.get("/",function(req,res){
  res.render('/', { title: 'Express' });
});
app.get("/About",function(req,res){
  res.render('/About', { title: 'Express' });
});
app.get("/skills",function(req,res){
  res.render('/skills', { title: 'Express' });
});
app.get("/services",function(req,res){
  res.render('/services', { title: 'Express' });
});
app.get("/contacts",function(req,res){
  res.render('/contacts', { title: 'Express' });
});
app.get("*",function(req,res){
  res.render('/NoPage', { title: 'Express' });
});
app.post('/Contact', function(req, res) {
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
