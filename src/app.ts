import express from "express";
import cors from "cors"
import router from "./app/router/router";


const app = express()

app.use(express.json())
app.use(cors())

//application api 
// application api
app.use("/api/v1/", router);


export default app;