import { connection } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Missao = connection.define("missao", {
  rank: {
    type: DataTypes.STRING(1),
    allowNull: false
  },
  aldeia: {
    type: DataTypes.STRING(130),
    allowNull: false
  },
  dataExecucao: {
    type: DataTypes.DATEONLY,
    defaultValue: "S/D"
  },
  desc: {
    type: DataTypes.STRING(500),
    allowNull: false
  }
})