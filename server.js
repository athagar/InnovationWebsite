const dotenv        = require('dotenv');
const express       = require('express');
const bodyParser    = require('body-parser');
const path          = require('path');
const cors          = require('cors');
const app           = express();
const PORT          = 80;

app.use(cors());
app.use(express.static('public'));
app.use(
    bodyParser.urlencoded({ extended: true }),
    bodyParser.json()
);
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render('index');
});

app.get('/api', function(req, res) {
    res.render('api');
});

app.get('/innovation', function(req, res) {
    res.render('innovation');
});

app.get('/ea', function(req, res) {
    res.render('ea');
});

app.get('/contact', function(req, res) {
    res.render('contact');
});

app.get('/internEnroll', function(req, res) {
    res.render('internEnroll');
});

app.listen(PORT, function() {
    console.log('Innovation Website listening on port: ' + PORT);
});
