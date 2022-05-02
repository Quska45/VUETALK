import { logger } from '../Logger/Logger.js'

class VueTalkSocket{
  static port = 1024;
  constructor( http, express, socket ){
    this.http = http;
    this.express = express;
    this.socket = socket;
    this.server = null;
    this.io = null;
  };

  initServer(){
    this.server = http.createServer( this.express() );
    this.server.listen(port, function(){
      logger.debug( `localhost:${port} listen` );
    })
  };

  makeIO(){
    if( !this.server ){
      logger.info( 'startServer 메서드로 server 부터 생성하세요.' );
    };

    this.io = this.socket( this.server )
  };

};

export default VueTalkSocket;