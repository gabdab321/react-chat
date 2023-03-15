const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/chat';
const dbName = 'chat';

MongoClient.connect(url, function(err, client) {
    console.log("Connected successfully to server");

    const db = client.db(dbName);
});

server.listen(3000, function(){
    console.log('listening on *:3000');
});