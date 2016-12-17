/**
 * Created by muhammed on 18/12/16.
 *
 * This scripts creates a server using express framework and send out a HTML file.
 */

var express = require('express');
var app = express();

var quoteFile = __dirname + '/quotes.html';
app.get('/', function(req, res) {
    res.sendFile(quoteFile);
});

var port = process.env.PORT || 8080;
app.listen(port, function (req, res) {
    console.log('server listening on port ', port);
})