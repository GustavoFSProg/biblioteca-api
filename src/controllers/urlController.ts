import { PrismaClient } from '@prisma/client'
import { Request, Response } from 'express'

const prisma = new PrismaClient()

async function registerUser(req: Request, res: Response) {
  try {
    const url = await prisma.biblioUrl.create({
      data: {
        name: req.body.name,
        sobrenome: req.body.sobrenome,
        area: req.body.area,
        titulo: req.body.titulo,
        edicao: req.body.edicao,
        ano: req.body.ano,
        cidade: req.body.cidade,
      },
    })
    return res.status(201).send({ msg: 'url created Sucessfuly!!', url })
  } catch (error) {
    return res.status(400).send({ msg: 'ERROR!!', error })
  }
}

async function getAuthor(req: Request, res: Response) {
  try {
    const data = await prisma.biblioUrl.findFirst({
      where: {name: req.body.name, sobrenome: req.body.sobrenome}
    })

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ error })
  }
}


async function getAll(req: Request, res: Response) {
  try {
    const data = await prisma.biblioUrl.findMany()

    return res.status(200).send(data)
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function updateUser(req: Request, res: Response) {
  try {
    await prisma.biblioUrl.update({
      where: { id: req.params.id },
      data: {
        name: req.body.name,
        sobrenome: req.body.sobrenome,
        area: req.body.area,
        titulo: req.body.titulo,
        edicao: req.body.edicao,
        ano: req.body.ano,
        cidade: req.body.cidade
      },
    })

    return res.status(200).send({ msg: 'User Deleted!!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

async function deleteUser(req: Request, res: Response) {
  try {
    await prisma.biblioUrl.delete({
      where: { id: req.params.id },
    })

    return res.status(200).send({ msg: 'User Updated!!' })
  } catch (error) {
    return res.status(400).send({ error })
  }
}

export default { registerUser, getAll, getAuthor, deleteUser, updateUser }
