export default {
  // sockets: [
  //   {
  //     name: 'home',
  //     url: 'http://localhost:3000',
  //     default: true,
  //     vuex: {
  //       mutations: [{
  //         // When "progress" is received,
  //         // commit mutation "examples/SET_PROGRESS
  //         progress: 'examples/SET_PROGRESS'
  //       },
  //         // Alternatively, use arrow syntax
  //         // 'progress --> examples/SET_PROGRESS' // S/A
  //       ],
  //       actions: [
  //         // When "chatMessage" is received,
  //         // dispatch action "FORMAT_MESSAGE"
  //         'chatMessage --> FORMAT_MESSAGE',
  //
  //         // When "SOMETHING_ELSE" is received,
  //         // dispatch action "SOMETHING_ELSE"
  //         'SOMETHING_ELSE'
  //       ],
  //
  //       emitBacks: [
  //         // When "examples/sample" state changes,
  //         // emit back the event "examples/sample"
  //         'examples/sample',
  //
  //         // When "examples/sample2" state changes,
  //         // emit back the event "sample2"
  //         'sample2 <-- examples/sample2'
  //       ]
  //     }
  //   }
  // ]
  // module options
  sockets: [{
    name: 'main',
    url: 'http://localhost:3000'
  }]
}
