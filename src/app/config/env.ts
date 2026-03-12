import dotenv from "dotenv";

dotenv.config()

export const  env={
    DB_URI:process.env.DB_URI,
    PORT:process.env.PORT
}