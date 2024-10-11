import mysql from 'mysql'
import { sqlConfig } from '../../config'

// create connection
export const db = mysql.createConnection(sqlConfig)

// connect to mysql
db.connect((error)=>{
    if (error){
        console.log('Error connecting to MySql: ' +error.stack)
        return
    }
    console.log('connected to MySql successfully as ID: ' +db.threadId)
})