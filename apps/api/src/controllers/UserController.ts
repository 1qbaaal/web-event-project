import { createUser } from "@/service/UserService";
import { error } from "console";
import { NextFunction, Request, Response } from "express";

export const createUserAccount = async(req: Request, res: Response, next: NextFunction) =>{
  try {
    const { email, password, roleId } = req.body;

    await createUser({email, password, roleId})

    res.status(200).send({
      error: false,
      message: 'Create User Success!',
      data: null
    })
  } catch (error) {
    next(error)
  }
}