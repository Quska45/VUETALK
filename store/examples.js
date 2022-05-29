export const state = () => ({
  examples: []
})

export const mutations = {
  SET_PROGRESS(){
    console.log( 'SET_PROGRESS' );
  },
}

export const actions = {
  chatMessage( {commit} ){
    console.log( 'actions chatMessage' );
    commit( 'FORMAT_MESSAGE', {value:'test'} );
  }
}

export const emitBacks = {
  sample(){
    console.log( 'emitBacks sample' );
  }
}
