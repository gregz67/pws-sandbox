#! /usr/bin/env node

'use strict';

var http = require('http');
var express = require('express');
var gzippo = require('gzippo');
var morgan = require('morgan');

var app = express();
app.use(morgan('combined'));
app.use(gzippo.staticGzip(__dirname + '/public'));

var port = process.env.VCAP_APP_PORT || 8080;
var server = http.createServer(app);
server.listen(port);