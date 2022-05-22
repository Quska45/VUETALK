export const state = () => ({
  list: [
    { url: 'users', isActive: 'is-active', icon: 'account' },
    { url: 'chattings', isActive: '', icon: 'chat' },
    { url: 'settings', isActive: '', icon: 'cog-outline' }
  ]
})

export const mutations = {
  initMenus: function(){
    let url = window.location.href.split( "http://localhost:3000/" )[1].split( '/' )[0];

    this.state.menus.list.forEach(function( menu ){
      if( menu.url === url ){
        menu.isActive = 'is-active';
      } else {
        menu.isActive = '';
      }
    });
  },
  selectNavItem: function(state, url){
    this.state.menus.list.forEach(function(menu){
      menu.url === url ? menu.isActive = 'is-active' : menu.isActive = '';
    });
  }
}
