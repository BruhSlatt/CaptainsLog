const express = require('express')
const bodyParser = require('body-parser')
const urlEncoded = bodyParser.urlencoded({extended: false})

// Server
const app = express();


// Engine
app.set("view engine","ejs");

// Middleware
app.use(express.static('./public'));

// GET Routes
app.get('/', (req, res) => {
    // rendering tasks view and passing taskToDo data
    res.render('home.ejs');
});
app.get('/logs', (req, res) => {
    // rendering tasks view and passing taskToDo data
    res.render('logs');
});


// Listening
app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})
