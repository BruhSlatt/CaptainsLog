const express = require('express')
const bodyParser = require('body-parser')
const mysql      = require('mysql');

const urlEncoded = bodyParser.urlencoded({extended: false})
const dataBase = mysql.createConnection({
    host     : 'localhost',
    user     : 'admin',
    password : 'student',
    database : 'CapLogs'
  });

const postData = []
const postDate = []
// Server
const app = express();


// Engine
app.set("view engine","ejs");

// Middleware
app.use(express.static('./public'));

// GET Routes
app.get('/', (req, res) => {
    res.render('home.ejs');
});

app.get('/logs', (req, res) => {
    res.render('logs', {blogPosts: postData});
});

app.get('/caplog1', (req, res) => {
    res.render('cap1');
});

// app.get('/caplog2', (req, res) => {
//     res.render('cap2', {blogPosts: postData, date: postDate});
// });

app.get('/caplog2', (req, res) => {
    let sql = 'SELECT * FROM LogEntry WHERE PAGE=2';
    dataBase.query(sql, function (err, results) {
        if (err) throw err;
        // rendering tasks view and passing taskToDo data
        res.render('cap2', {blogPosts: postData, date: postDate});
      });
});

app.get('/caplog3', (req, res) => {
    res.render('cap3');
});

app.get('/caplog4', (req, res) => {
    res.render('cap4');
});

app.get('/caplog5', (req, res) => {
    res.render('cap5');
});

app.get('/caplog6', (req, res) => {
    res.render('cap6');
});

app.get('/caplog7', (req, res) => {
    res.render('cap7');
});

app.get('/caplog8', (req, res) => {
    res.render('cap8');
});

app.get('/caplog9', (req, res) => {
    res.render('cap9');
});
//POST Routes 
app.post('/logs', urlEncoded, (req, res) => {
    let incomingEntry = {};
    let theDate = {};
    incomingEntry.logEntry = req.body.Body;
    theDate.date = req.body.Title
    postData.push(incomingEntry)
    postDate.push(theDate)
    res.redirect('/logs')
});



// Listening
app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})
