/**
 * Created by han on 2015/11/22.
 */
var PeerServer = require('peer').PeerServer;
var server = PeerServer({port: 9000, path: '/myapp', proxied: true});

var express = require('express');
var app = express();
var ExpressPeerServer = require('peer').ExpressPeerServer;

app.get('/', function(req, res, next) { res.send('Hello world!'); });

var server = app.listen(9000);

var options = {
  debug: true
}

app.use('/api', ExpressPeerServer(server, options));

// OR

var server = require('http').createServer(app);

app.use('/peerjs', ExpressPeerServer(server, options));

server.listen(9000);
