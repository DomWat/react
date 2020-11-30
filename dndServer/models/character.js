'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Character extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Character.init({
    name: DataTypes.STRING,
    race: DataTypes.STRING,
    age: DataTypes.INTEGER,
    class: DataTypes.STRING,
    abil: DataTypes.STRING,
    level: DataTypes.STRING,
    exp: DataTypes.INTEGER,
    hp: DataTypes.INTEGER,
    mp: DataTypes.INTEGER,
    str: DataTypes.INTEGER,
    agi: DataTypes.INTEGER,
    def: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Character',
  });
  return Character;
};