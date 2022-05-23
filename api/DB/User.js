import { Model, DataTypes } from 'sequelize'

export class User extends Model {

};

export const initUser = function( sequelize ){
  User.init({
    // 메시지를 보낸 유저의 id
    toId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    // 메시지를 받은 유저의 id
    fromId: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    // 메시지를 보내고 받은 순서
    order: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    // 메시지 내용
    text: {
      type: DataTypes.STRING(255),
      allowNull: false,
    }
  }, {sequelize, tableName: 'USER', timestamps: false});
}
