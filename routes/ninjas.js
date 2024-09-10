// criar um novo ninja
// mostrar ninjas criados
// mostrar ninja por id
// deletar ninja
// atualizar ninja

import { Router } from "express";
import { Ninja } from "../models/ninja.js";

export const ninjasRouter = Router();

ninjasRouter.post("/ninjas", async (req, res) => {
  const { nome, aldeia, idade, elemento, imgURL } = req.body

  try {
    await Ninja.create(
       {nome, aldeia, idade, elemento, imgURL},
       res.json({ message: "Ninja inserido com sucesso" })
    )
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Erro ao cadastrar ninja." })
  }
})

ninjasRouter.get("/ninjas", async (req, res) => {

  const listaNinjas = await Ninja.findAll();
  res.json(listaNinjas)
})

ninjasRouter.get("/ninjas/:id", async (req, res) => {
  const ninja = await Ninja.findOne({
    where: { id: req.params.id },
    attributes: { exclude: ['createdAt', 'updatedAt' ]},
  })
  if (ninja) {
    res.json(ninja)
  }
  else {
    res.status(404).json({ message: "Ninja não encontrado" })
  }
})