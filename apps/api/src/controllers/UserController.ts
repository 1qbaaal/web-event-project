import { HashPassword } from "@/helpers/Hashing";
import { createUser } from "@/service/UserService";
import { error } from "console";
import { NextFunction, Request, Response } from "express";
import { create } from "ts-node";
import { isAwaitExpression } from "typescript";

export const createUserAccount = async(req: Request, res: Response, next: NextFunction) =>{
   
  try {
    const {email,password,roleId}= req.body;
   const hashedPassword = await HashPassword(password)
   const createdUser = await createUser({email, password:hashedPassword,roleId})
  
    res.status(200).send({
      error: false,
      message: 'Create User Success!',
      data: null
    })
  } catch (error) {
    next(error)
  }
}
 // const { email, password, roleId } = req.body;
    // const hashedPassword = await HashPassword{{passwords}}
    // const createdUser = await createUser({email, passwords:hashedPassword, roleId})
