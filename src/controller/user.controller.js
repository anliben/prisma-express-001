import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const getUserAll = async (req, res) => {
    try {
        const response = await prisma.user.findMany({
            include: {
                dominios: true
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const response = await prisma.user.findUnique({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json(response)
    } catch (error) {
        res.status(404).json({ msg: error.message })
    }
}

export const createUser = async (req, res) => {
    const { name, email, phone, dominios } = req.body
    try {
        const user = await prisma.user.create({
            data: {
                name: name,
                email: email,
                phone: phone,
                dominios: {
                    connect: {
                        id: dominios
                    }
                }
            }
        })
        res.status(201).json(user)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const getUserByDomain = async (req, res) => {
    const { domain } = req.params
    try {
        const user = await prisma.user.findMany({
            where: {
                dominios: {
                    some: {
                        name: domain
                    }
                }
            }
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(500).json({ msg: error.message })
    }
}

export const updateUser = async (req, res) => {
    const { name, email, phone, domain } = req.body
    try {
        const user = await prisma.user.update({
            where: {
                id: Number(req.params.id)
            },
            data: {
                name: name,
                email: email,
                phone: phone,
                dominios: {
                    connect: {
                        id: domain
                    }
                }
            }
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}

export const deleteUser = async (req, res) => {
    try {
        const user = await prisma.user.delete({
            where: {
                id: Number(req.params.id)
            }
        })
        res.status(200).json(user)
    } catch (error) {
        res.status(400).json({ msg: error.message })
    }
}