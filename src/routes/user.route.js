import express from 'express'
import {
    getUserAll,
    getUserById,
    createUser,
    getUserByDomain,
    updateUser,
    deleteUser
} from '../controller/user.controller.js'

const routerUser = express.Router()


routerUser.get('/users', getUserAll)
routerUser.get('/users/:id', getUserById)
routerUser.post('/users', createUser)
routerUser.get('/users/domain/:domain', getUserByDomain)
routerUser.patch('/users/:id', updateUser)
routerUser.delete('/users/:id', deleteUser)

export default routerUser