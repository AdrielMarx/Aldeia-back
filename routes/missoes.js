import { Router } from "express";
import { Missao } from "../models/missao.js";
import { Ninja } from "../models/ninja.js";

export const missoesRouter = Router()

missoesRouter.get("/missoes", async (req, res) => {
  const listaMissoes = await Missao.findAll({
    attributes: { exclude: ['createdAt', 'updatedAt'] }
  })
  
  res.json(listaMissoes)
})

missoesRouter.post("/missoes", async (req, res) => {
  const { ninjaId, titulo, rank, aldeia, dataExecucao, desc } = req.body

  try {
    const ninja = await Ninja.findByPk(ninjaId)
    if (ninja) {
      await Missao.create({ titulo, rank, aldeia, dataExecucao, desc, ninjaId })
      res.json({ message: "Missão criada." })
    }
    else {
      res.status(404).json({ message: "Ninja não encontrado." })
    }
  }
  catch(err) {
    console.log(err)
    res.status(500).json({ message: "Erro ao criar missão" })
  }
})

missoesRouter.get("/missoes/:id", async (req, res) => {
  const missao = await Missao.findOne({ 
    where: { id: req.params.id },
    attributes: { exclude: ['createdAt', 'updatedAt'] },
    include: [{ model: Ninja, attributes: ["id", ["nome", "nomeNinja"], ["rank", "rankNinja"]] }]
  })
  if (missao) {
    res.json(missao)
  }
  else {
    res.status(404).json({ message: "Missão não encontrada." })
  }
})

missoesRouter.delete("/missoes/:id", async (req, res) => {
  const idMissao = req.params.id
  try {
    const missao = await Missao.findOne({ where: { id: idMissao } })
    if (missao) {
      await missao.destroy()
      res.json({ message: "Missão deletada." })
    }
    else {
      res.json({ message: "Missão não encontrada." })
    }
  }
  catch(err) {
    res.status(500).json({ message: "Erro ao excluir missão" })
  }
})

