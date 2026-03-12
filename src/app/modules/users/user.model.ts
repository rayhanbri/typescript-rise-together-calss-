import { model, Schema } from "mongoose";
import { IUser } from "./user.Interface";


const userSchema=new Schema<IUser>({
    name :{type: String},
    email:{type : String},
    password:{type : String}
})

export const User =model<IUser>('user' , userSchema)