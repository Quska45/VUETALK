import { logger } from '../Logger/Logger.js';

export default class VueTalkSocket{
  constructor( http, express, socket ){
    this.http = http;
    this.express = express;
    this.socket = socket;
    this.server = null;
    this.io = null;
  };

  static port = 1024;
  static socketOption = {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  };

  initServer(){
    this.server = this.http.createServer( this.express() );
    this.server.listen(VueTalkSocket.port, function(){
      logger.info( `localhost:${VueTalkSocket.port} listen` );
    })

    return this.server;
  };

  makeIO(){
    if( !this.server ){
      logger.info( 'startServer 메서드로 server 부터 생성하세요.' );
      return false;
    };

    this.io = this.socket( this.server, VueTalkSocket.socketOption );
    this.io.on('connection', () => { logger.info('io connet 됨'); });

    return this.io;
  };

};