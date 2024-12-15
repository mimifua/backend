import { Request, Response } from 'express';
import {v4 as uid} from 'uuid'
import bcrypt from 'bcrypt'

import { connection } from "../helpers/db.helpers";
import { UserRoles } from "../models/users.models"; 
import { RegisterUserSchema } from "../validators/auth.validators";


// export const registerUser = async(request:Request, response:Response) => {
export async function registerUser(request:Request, response:Response){
    const id=uid()
    const role=UserRoles.Customer
    const {username,email,password} = request.body
    const {error} = RegisterUserSchema.validate(request.body)
    
    try{
        if (error){
            return response.status(400).json({error:error.details[0].message})
        } else {
            const hashedPassword = await bcrypt.hash(password,9)

            // connect to mysql
            connection.connect()
            connection.query(`INSERT INTO users VALUES (
                '${id}',
                '${username}',
                '${email}',
                '${hashedPassword}',
                '${role}',
                0,
                0
                )`, (error)=>{
                    if (error){
                        return response.status(500).json({error:error.sqlMessage})
                    }
                    return response.status(201).json({success:'Congratulations! You have successfully created a new account.'})
                })

            // end connection to mysql
            // connection.end()
        }
    } catch(error){
        return response.status(500).json({error:error})
    }
}