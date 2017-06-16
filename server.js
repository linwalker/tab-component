var path = require('path');
var express = require('express');

var app = express();
app.use(express.static(path.join(__dirname,'build')));
app.use('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
})

app.listen(4000, function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log('listening at http://localhost:4000');
})