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
// Different datas
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
        console.log(results)
        // rendering tasks view and passing taskToDo data
        res.render('cap2', {blogPosts: results[0]});
      });
});

app.get('/caplog3', (req, res) => {
    let sql = 'SELECT * FROM LogEntry WHERE PAGE=2';
    dataBase.query(sql, function (err, results) {
        if (err) throw err;
        // rendering tasks view and passing taskToDo data
        res.render('cap3', {blogPosts: postData, date: postDate});
      });
});

app.get('/caplog4', (req, res) => {
    res.render('cap4');
});

app.get('/caplog5', (req, res) => {
    res.render('cap5');
});

//POST Routes 

app.post('/logs', urlEncoded, (req, res) => {
    let date = {date: req.body.DatePg2, body: req.body.BodyPg2, page: 2}
    let sql  = 'INSERT INTO LogEntry SET ?'
    dataBase.query(sql, date, function (err, results){
        if (err) throw err;
        console.log(results)
        res.redirect('/caplog2')
    })
});
app.delete('/clear/:id',(req, res) => {
    let sql = 'DELETE FROM LogEntry WHERE PAGE = 2'
    dataBase.query(sql,(err, result) =>{
        if(err) throw err;
        console.log(result);
        res.json(result)
    })
})

// Listening
app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})
