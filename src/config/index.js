import dotenv from 'dotenv'

dotenv.config()

export const DB_HOST = process.env.DB_HOST || 'localhost'
export const DB_USER = process.env.DB_USER || 'root'
export const DB_PASSWORD = process.env.DB_PASSWORD || 'password'
export const DB_PORT = process.env.DB_PORT || 3306
export const DB_DATABASE = process.env.DB_DATABASE || 'companydb'

export const NODE_LOCAL_PORT = process.env.NODE_LOCAL_PORT || 3000 