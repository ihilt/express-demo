var express = require('express');
var morgan = require('morgan');


var app = express();

app.use(morgan('combined'));

app.use(express.static('public'));

var blocks = require('./routes/blocks');
app.use('/blocks', blocks);

//var locations = require('./routes/locations');
//app.use('/locations', locations);

app.listen(3000, function () {
  console.log('Express ready');
});
