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

app.listen(PORT, function() {
    console.log('Innovation Website listening on port: ' + PORT);
});
