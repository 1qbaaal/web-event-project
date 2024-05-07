import { NextFunction,Request,Response } from "express";
import {findRolebyEmail,findUserByUid} from"../../services/Auth/index"
import { ComparePassword } from "@/helpers/Hashing";
import { createToken } from "@/helpers/Token";

export const loginController = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const {email,password} = req.body 

        const findRolebyEmailResult = await findRolebyEmail({email})
        
        const comparePasswordResult = await ComparePassword({
            passwordFromClient: password, 
            passwordFromDatabase: findRolebyEmailResult.password
        })
    
        if(!comparePasswordResult) throw new Error('Password Doesnt Match')

        const accessToken = await createToken({uid:findRolebyEmailResult.uid})
        
        res.status(200).send({
            error: false, 
            message: 'Login Success', 
            data: {
                accessToken,                
                
            }
        })
    } catch (error) {
        next(error)
    }
}
