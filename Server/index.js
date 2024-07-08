'use strict';
const cors =  require("cors");
const bodyParser = require("body-parser");
const express = require('express');
const path = require('path');
const app = express();
app.use(cors());
app.use(bodyParser.json())
// app.use(express.static(path.join(__dirname, 'build')));

// This code makes sure that any request that does not matches a static file
// in the build folder, will just serve index.html. Client side routing is
// going to make sure that the correct content will be loaded.
// app.use((req, res, next) => {
//     if (/(.ico|.js|.css|.jpg|.png|.map)$/i.test(req.path)) {
//         next();
//     } else {
//         res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
//         res.header('Expires', '-1');
//         res.header('Pragma', 'no-cache');
//         res.sendFile(path.join("http://localhost:3000/"));
//     }
// });


app.get("/",function(req,res){
  res.send();
})
app.post("/Contact",function(req,res){
    console.log(req.body);
    res.status('200');
    res.end();
})
// app.post("/",function(req,res){
//     console.log(req.body)
//     res.status('200');
//     res.end();
// })
// Start the server
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
    console.log('Press Ctrl+C to quit.');
});

