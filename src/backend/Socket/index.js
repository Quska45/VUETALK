import express from 'express';
import http from 'http';

const socketOption = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
};

function initSocket(){
  let server = http.createServer(express());
  let io = require('socket.io')(server, socketOption);
  io.on('connection', () => { console.log('connet 됨'); });

  server.listen(3000, function(){
    console.log("서버 시작")
  })
}

export default {
  initSocket
};