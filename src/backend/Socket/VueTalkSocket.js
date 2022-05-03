import { logger } from '../Logger/Logger.js'

export default class VueTalkSocket{
  static port = 1024;
  constructor( http, express, socket ){
    this.http = http;
    this.express = express;
    this.socket = socket;
    this.server = null;
    this.io = null;
  };

  initServer(){
    this.server = this.http.createServer( this.express() );
    this.server.listen(this.port, function(){
      logger.debug( `localhost:${this.port} listen` );
    })

    return this.server;
  };

  makeIO(){
    if( !this.server ){
      logger.info( 'startServer 메서드로 server 부터 생성하세요.' );
      return false;
    };

    this.io = this.socket( this.server )

    return this.io;
  };

};