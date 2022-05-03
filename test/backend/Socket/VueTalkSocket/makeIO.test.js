import VueTalkSocket from "../../../../src/backend/Socket/VueTalkSocket";
import http from 'http';
import express from 'express';
import socket from 'socket.io';

let VueTalkSocketObj = new VueTalkSocket( http, express, socket )
//let server = VueTalkSocketObj.initServer();
let io = VueTalkSocketObj.makeIO();

test("VueTalkSocket makeIO Test", ()=>{
  expect(
    io
  ).toBe( io );
});