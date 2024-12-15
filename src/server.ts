import express,{json} from 'express'
import dotenv from 'dotenv'
import authRouter from './api-v1/routes/auth.routes'

dotenv.config()

const app = express()
const port = process.env.PORT

// add json body to response/request
app.use(json())

// configure URL routes
app.use('/auth',authRouter)


app.listen(port, ()=>{
    console.log(`[server]:Backend server running at http://localhost:${port}`)
})

