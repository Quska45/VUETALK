import socket from "socket.io";

export default class IO {
  static STATE_CODES = {
    NO_SERVER: {
      description: '서버 객체가 없습니다.'
    }
  };

  constructor() {
    this.io = null;
  }

  init( server ){
    if( !server ){
      return IO.STATE_CODES.NO_SERVER;
    };

    this.io = socket( server, {
      cors: {
        origin: "*",
        methods: ["GET", "POST"],
        transports: ['polling'],
        credentials: true
      }
    });

    this.io.engine.on("connection_error", (err) => {
      console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
      console.log('connection_error');
      console.log(err.code);
      console.log(err.message);
      console.log('@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@');
    });

    this.io.on('connection', function( socket ){
      console.log( 'Made socket connection' );

      socket.on('msg', function(){
        console.log( 'Recived: ' + msg );
        socket.emit('msg')
      });

      socket.on('disconnect', function(){
        console.log( 'socket disconnected' );
      })
    });

    return true;
  }
}
