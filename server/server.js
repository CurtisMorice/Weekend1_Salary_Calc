//Require in express from its Node module
// express is a function
const express = require('express');
//This gives us back an Express App
const app = express();
//Tells Express which files to look for when
//getting a request from someones browser
app.use(express.static('server/public'));

//Start listening for request
const port = 5000;
app.listen(port, function() {
    console.log(`Listening on port ${port}`);
});