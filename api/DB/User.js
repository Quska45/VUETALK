import { Model, DataTypes } from 'sequelize'

export class User extends Model {

};

export const initUser = function( sequelize ){
  User.init({
    id: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    ip: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    chats: {
      type: DataTypes.JSON
    }
  }, {sequelize, tableName: 'USER', timestamps: false});
}
