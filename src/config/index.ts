import dotenv from 'dotenv'

dotenv.config()

// sql config values
export const sqlConfig = {
    host:'localhost',
    user:process.env.DB_USERNAME,
    password:process.env.DB_PASSWORD,
    database:process.env.DB_NAME
}