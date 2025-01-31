import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import routerUser from './routes/user.route.js'
import routerDomain from './routes/domain.route.js'

dotenv.config()

const app = express()
const port = process.env.APP_PORT || 5000

app.use(cors())
app.use(express.json())

app.use('/api/v1', routerUser)
app.use('/api/v1', routerDomain)

app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})

export default app
