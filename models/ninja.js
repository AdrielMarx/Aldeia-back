import { connection } from "../config/database.js";
import { DataTypes } from "sequelize";
import { Missao } from "./missao.js";

export const Ninja = connection.define("ninja", {
  nome: {
    type: DataTypes.STRING(130),
    allowNull: false
  },
  rank: {
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
    type: DataTypes.STRING(500),
    allowNull: false
  }
})

Ninja.hasMany(Missao, { onDelete: "CASCADE" })
Missao.belongsTo(Ninja)