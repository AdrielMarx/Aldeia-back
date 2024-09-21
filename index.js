import { connection, authenticate } from "./config/database.js";
import express from "express";
import cors from "cors"
import { ninjasRouter } from "./routes/ninjas.js";
import { missoesRouter } from "./routes/missoes.js";

authenticate(connection).then(() => {
  connection.sync()
})

const app = express()

app.use(express.json())

app.use(cors())

// endpoints
app.use(ninjasRouter)
app.use(missoesRouter)

app.listen(3000, () => {
  console.log("servidor rodando em http://localhost:3000/")
})