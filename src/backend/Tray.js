import path from 'path';

// 트레이가 사라지는 현상 때문에 이렇게 해야한다. 가비지 컬렉터로 인해 메모리가 정리 된다고 한다.
// closer를 만들어서 메모리에서 없어지지 않도록 해줘야 하는 것으로 보인다.
let tray = null;
function initTrayIconMenu( Menu, Tray ){
  tray = new Tray( path.join(__dirname, '../src/assets/logo.png') );

  let myMenu = Menu.buildFromTemplate([
    {label: '열기', type: 'normal', click: clickEvent.open},
    {label: '종료', type: 'normal', click: clickEvent.terminate},
  ]);

  tray.setToolTip('VueTalk');
  tray.setContextMenu(myMenu);
};

let clickEvent = {
  open: function(){
    console.log('open');
  },
  terminate: function(){
    console.log('terminate');
  }
}

export default {
  initTrayIconMenu
}