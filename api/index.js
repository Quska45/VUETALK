import express from 'express';
import {Op, Sequelize} from 'sequelize';
import VueTalkModels from './DB/VueTalkModels'
const app = express();

const sequelize = new Sequelize( 'sqlite::memory' );
sequelize.sync(); // 테이블 없으면 생성함
VueTalkModels.initUser( sequelize );

// 실제로는 /api 라우트를 처리하는 메소드가 된다.
app.get('/', function(req, res) {
  res.send('API root')
});

app.get('/user/init', function(req, res) {
  VueTalkModels.User.create({
    toId: 'test1',
    fromId: 'test2',
    order: 1,
    text: 'test1'
  }).then(function(){
    console.log( arguments );
  }).catch(function(){
    console.log( arguments );
  });
  VueTalkModels.User.create({
    toId: 'test2',
    fromId: 'test1',
    order: 2,
    text: 'test2'
  }).then(function(){
    console.log( arguments );
  }).catch(function(){
    console.log( arguments );
  });
  VueTalkModels.User.create({
    toId: 'test2',
    fromId: 'test3',
    order: 1,
    text: 'test3'
  }).then(function(){
    console.log( arguments );
  }).catch(function(){
    console.log( arguments );
  });
  res.send('init')
});

app.get('/user', function(req, res, next) {
  let tasks = VueTalkModels.User.findAll({
    where: {
      [Op.or]: [
        { toId: 'test1' },
        { fromId: 'test1' }
      ]
    }
  }).then(function( result ){
    res.json( result );
  });
});

app.get('/db/:id', function(req, res, next) {
  let id = req.params.id
  let tasks = VueTalkModels.User.findAll({

  });
  console.log('tasks', tasks);
});

// 모듈로 사용할 수 있도록 export
// 앱의 /api/* 라우트로 접근하는 모든 요청은 모두 app 인스턴스에게 전달된다.
module.exports = {
  path: '/api',
  handler: app
}
