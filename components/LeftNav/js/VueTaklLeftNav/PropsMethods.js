// 하위 컴포넌트에 의해 실행되어 현재 컴포넌트를 변경하는 기능들을 모아 놓은 파일
export const vueTalkLeftNavPropsMethods = {
  selectNavItem: function( navObj, url ){
    navObj.menus.forEach(function(menu){
      menu.url === url ? menu.isActive = 'is-active' : menu.isActive = '';
    });
  }
};
