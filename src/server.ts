import mongoose from "mongoose"

import app from "./app.ts";
import { env } from "./app/config/env.ts";

const startServer=async()=>{
    try{
        await mongoose.connect(env.DB_URI as string);
        console.log('connected with database')

        app.listen(env.PORT,()=>{
              console.log(`Server is running on ${env.PORT}`);
        })
    }catch(error){
        console.log(error)
    }
}

startServer()