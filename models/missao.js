import { connection } from "../config/database.js";
import { DataTypes } from "sequelize";

export const Missao = connection.define("missao", {
  titulo: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  nivel: {
    type: DataTypes.STRING(10),
    allowNull: false
  },
  dataExecucao: {
    type: DataTypes.DATEONLY
  },
  desc: {
    type: DataTypes.STRING(1000),
    allowNull: false
  },
  userId: {
    type: DataTypes.STRING,
    allowNull: false
  }
})