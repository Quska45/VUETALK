import { createApp } from 'vue'
import App from './App.vue'
import VueSocketIO from 'vue-3-socket.io';

let socket = new VueSocketIO({
    debug: true,
    connection: 'http://localhost:8080',
    vuex: {
        // store,
        // actionPrefix: 'SOCKET_',
        // mutationPrefix: 'SOCKET_'
    },
    options: { path: "*" } //Optional options
});

createApp(App).use(socket).mount('#app')
