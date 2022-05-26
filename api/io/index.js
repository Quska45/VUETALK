import http from 'http'
import express from 'express'

import IO from './IO'

const app = express();
let server = null;
let io = new IO();

app.get('/', function(req, res) {

  console.log( 'io 들어옴' );
  let result = io.init( res.connection.server );

});

module.exports = {
  path: '/socket',
  handler: app
}
