/**
 * Created by han on 2015/11/22.
 */
var PeerServer = require('peer').PeerServer;
var server = PeerServer({port: 9000, path: '/myapp', proxied: true});
