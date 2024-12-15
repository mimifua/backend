import mysql from 'mysql2/promise'
import { sqlConfig } from '../../config'

// create pool
export const pool = mysql.createPool(sqlConfig)

// A simple SELECT query
// async function seeMeNow(){
//     try {
//         const [rows, fields] = await pool.query(
//           'SELECT id,username,email FROM users;'
//         );
      
//         console.log(rows); // results contains rows returned by server
//         console.log(fields); // fields contains extra meta data about results, if available
//       } catch (err) {
//         console.log(err);
//       }
// }

// seeMeNow()


