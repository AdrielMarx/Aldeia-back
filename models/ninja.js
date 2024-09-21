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
  elemento: {
    type: DataTypes.STRING(130),
    allowNull: false
  },
  imgURL: {
    type: DataTypes.STRING(500),
    allowNull: true,
    defaultValue: "https://images.rawpixel.com/image_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA1L2pvYjk2My1iLTAxNl8zLWxodHk4Mmg2LmpwZw.jpg"
  }
})

Ninja.hasMany(Missao, { onDelete: "CASCADE" })
Missao.belongsTo(Ninja)