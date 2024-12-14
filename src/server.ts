import express from 'express'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const port = process.env.PORT

app.get('/', (request, response) =>{
    response.send('Hello World!')
})


app.listen(port, ()=>{
    console.log(`[server]:Backend server running at http://localhost:${port}`)
})

