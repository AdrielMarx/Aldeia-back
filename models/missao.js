import { connection } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Missao = connection.define("missao", {
  titulo: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  nivel: {
    type: DataTypes.STRING(1),
    allowNull: false
  },
  dataExecucao: {
    type: DataTypes.DATEONLY
  },
  desc: {
    type: DataTypes.STRING(500),
    allowNull: false
  }
})