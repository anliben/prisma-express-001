import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getDomain = async (req, res) => {
    try {
        const response = await prisma.dominio.findMany()
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const createDomain = async (req, res) => {
    const { name } = req.body
    try {
        const domain = await prisma.dominio.create({
            data: {
                name: name
            }
        })
        res.status(201).json(domain)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}
