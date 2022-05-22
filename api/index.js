import express from 'express';
import { Sequelize } from 'sequelize';
import { User, initUser } from './DB/User'
const app = express();

const sequelize = new Sequelize( 'sqlite::memory' );
sequelize.sync(); // 테이블 없으면 생성함
initUser( sequelize );

// 실제로는 /api 라우트를 처리하는 메소드가 된다.
app.get('/', function(req, res) {
  res.send('API root')
});

app.get('/db', function(req, res, next) {
  res.json({foo: 1})
});

app.get('/db/:id', function(req, res, next) {
  let id = req.params.id
  let tasks = User.findAll({

  });
  console.log('tasks', tasks);
});

// 모듈로 사용할 수 있도록 export
// 앱의 /api/* 라우트로 접근하는 모든 요청은 모두 app 인스턴스에게 전달된다.
module.exports = {
  path: '/api',
  handler: app
}
