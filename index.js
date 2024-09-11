import { connection, authenticate } from "./config/database.js";
import express from "express";
import cors from "cors"
import { ninjasRouter } from "./routes/ninjas.js";

authenticate(connection).then(() => {
  connection.sync()
  
})

const app = express()

app.use(express.json())
app.use(cors({ origin: "http://localhost:5173"}))

// endpoints
app.use(ninjasRouter)

app.listen(3000, () => {
  console.log("servidor rodando em http://localhost:3000/")
})