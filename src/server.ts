import express,{json} from 'express'
import dotenv from 'dotenv'
import { db } from './api-v1/helpers/db.helpers'

dotenv.config()

const app = express()
const port = process.env.PORT

// add json body to response/request
app.use(json())

// test mysql connection
app.get('/',(request,response) =>{
    db.query('SELECT * FROM users', (error,results)=>{
        if(error){
            console.error('Error occurred ' + error.stack)
            response.status(500).send({message:'Error fetching users.'})
            return
        }
        console.log(response.send(results))
        response.status(200).send({message:results})
    })
})


app.listen(port, ()=>{
    console.log(`[server]:Backend server running at http://localhost:${port}`)
})

