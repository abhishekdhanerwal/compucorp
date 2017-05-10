var express = require('express');
var path = require('path');
// var events = require('./eventsController');
var app = express();
var rootPath = path.normalize(__dirname + '/../');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static( rootPath + '/app'));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods","GET, POST, PATCH, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Auth-Token ,X-Requested-With, Content-Type, Accept ,X-CSRF-TOKEN");
    next();
});

// app.get('/data/event/:id', events.get);
// app.get('/data/event', events.getAll);
// app.post('/data/event/:id', events.save);
app.get('*', function(req, res) { res.sendFile(rootPath + '/app/index.html'); });

app.listen(8000);
console.log('Listening on port ' + 8000 + '...');