import mysql from 'mysql'
import { sqlConfig } from '../../config'

// create connection
export const connection = mysql.createConnection(sqlConfig)

// connect to mysql
// connection.connect((error)=>{
//     if (error){
//         console.log('Error connecting to MySql: ' + error.stack)
//         return
//     }
//     console.log('connected to MySql successfully as ID: ' + db.threadId)
// })