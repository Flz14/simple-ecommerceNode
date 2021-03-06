const Sequelize = require("sequelize");
const sequelize = require("../config/database");
var Moment = require("moment");

const Token = sequelize.define("token", {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  tokenKey: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  expiresOn: {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Moment().add("5", "d").toDate(),
  },
});

module.exports = Token;
