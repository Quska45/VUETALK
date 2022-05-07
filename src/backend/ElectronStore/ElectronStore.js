import { logger } from '@/backend/Logger/Logger';
import electron from 'electron';
console.log('ipcMain');
console.log(electron);
console.log(electron.app);
console.log( electron.ipcMain );
console.log(electron.ipcMain);

let ipcMain = electron.ipcMain;
console.log(ipcMain);

electron.app.on('window-all-closed', () => {
    // On macOS it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    console.log('asdkjfh');
  })

ipcMain.on('test', (e, payload) => {
    logger.info( payload );
    logger.info( 'test success' );

    e.reply( 'rendererTest', 'test success' );
});

function onElectronEvent(){

}

export {
    onElectronEvent
}