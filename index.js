import { connection, authenticate } from "./config/database.js";
import express from "express";
import cors from "cors"

authenticate(connection).then(() => {
  connection.sync()
})

const app = express()

app.use(express.json())
app.use(cors())

app.get("/hello", (req, res) => {
  res.json("e ai cacete")
})

app.listen(3000, () => {
  console.log("servidor rodando em http://localhost:3000/")
})