import express from 'express'
import {
    createDomain,
    getDomain
} from '../controller/domain.controller.js'

const routerDomain = express.Router()


routerDomain.get('/domain', getDomain)
routerDomain.post('/domain', createDomain)

export default routerDomain