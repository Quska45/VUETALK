import { io, Manager } from 'socket.io-client'

export const state = () => ({
  socket: null
})

export const mutations = {
  async initSocket(){
    let socket = this.state.socket.socket;
    try {
      socket = await io( 'http://localhost:3000', {
        cors: {
          origin: '*'
        }
      } );
      console.log('initSocket');

      await socket.on('connect', function(){alert(123)});

      // socket.on('msg', function( data ){
      //   console.log('socket 테스트');
      //   console.log(data);
      // })

    } catch (e) {
      console.log(e);
    }

  }
}

