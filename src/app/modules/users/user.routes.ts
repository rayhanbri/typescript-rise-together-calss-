import express from "express";
import { userController } from "./user.controler";

const router=express.Router();

router.post("/",userController.createUser)

export const UserRouter= router;