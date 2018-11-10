
var express = require('express');
var mongo_express = require('mongo-express/lib/middleware')
var mongo_express_config = require('./config.js')
var path = require('path');

var app = express();

// We cannot use just / because our reverseproxy does not handle basic-auth
app.use('/mongo_express', mongo_express(mongo_express_config));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(process.env.PORT || 8080, function () {
  console.log('monge_express_examle listening on:' + (process.env.PORT || 8080));
});