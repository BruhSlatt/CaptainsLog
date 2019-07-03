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
    res.render('home.ejs');
});
app.get('/logs', (req, res) => {
    res.render('logs');
});
app.get('/caplog1', (req, res) => {
    res.render('cap1');
});
app.get('/caplog2', (req, res) => {
    res.render('cap2');
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
app.get('/caplog10', (req, res) => {
    res.render('cap10');
});
app.get('/caplog11', (req, res) => {
    res.render('cap11');
});
app.get('/caplog12', (req, res) => {
    res.render('cap12');
});
app.get('/caplog13', (req, res) => {
    res.render('cap13');
});
app.get('/caplog14', (req, res) => {
    res.render('cap14');
});
app.get('/caplog15', (req, res) => {
    res.render('cap15');
});

//POST Routes 
app.post('/logs', urlEncoded, (req, res) => {
    let incomingEntry = {};
    incomingEntry.logEntry = req.body.log;
    res.redirect('/')
});
// Listening
app.listen(3000, function(err){
    if (err)
        console.log(err)
    console.log('Server is live on port 3000')
})
