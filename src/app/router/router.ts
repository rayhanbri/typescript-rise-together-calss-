import express from "express";
import { UserRouter } from "../modules/users/user.routes";


const router=express.Router()

const moduleRoutes=[
    {
        path:"/user",
        route: UserRouter
    }
]
4
export default router;