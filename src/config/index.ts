import dotenv from 'dotenv'
import { SqlConfig } from '../api-v1/models/database.models'

dotenv.config()

// sql config values
export const sqlConfig:SqlConfig = {
    host:'localhost',
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
}