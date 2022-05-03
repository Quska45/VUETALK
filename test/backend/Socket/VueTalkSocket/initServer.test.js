import VueTalkSocket from "../../../../src/backend/Socket/VueTalkSocket";
import http from 'http';
import express from 'express';
import socket from 'socket.io';

let VueTalkSocketObj = new VueTalkSocket( http, express, socket )
let server = VueTalkSocketObj.initServer();

test("VueTalkSocket initServer Test", ()=>{
  expect(
    server
  ).toBe( server );
});