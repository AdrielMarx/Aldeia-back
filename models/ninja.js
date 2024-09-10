import { connection } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Ninja = connection.define("ninja", {
  nome: {
    type: DataTypes.STRING(130),
    allowNull: false
  },
  aldeia: {
    type: DataTypes.STRING(130),
    allowNull: false
  },
  idade: {
    type: DataTypes.INTEGER(3),
    allowNull: false
  },
  elemento: {
    type: DataTypes.STRING(130),
    allowNull: false
  },
  imgURL: {
    type: DataTypes.STRING(),
    allowNull: false,
    unique: true
  }
})