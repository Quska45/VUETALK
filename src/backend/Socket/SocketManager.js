import express from 'express';
import http from 'http';
import { logger } from '../Logger/Logger.js'
import VueTalkSocket from "@/backend/Socket/VueTalkSocket";
import socket from "socket.io";

const socketOption = {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
};

function initSocket(){
  let vueTalkSocket = new VueTalkSocket( http, express, socket )
  vueTalkSocket.initServer();
  vueTalkSocket.makeIO();

  return vueTalkSocket;
}

export default {
  initSocket
};