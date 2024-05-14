import { HashPassword } from "@/helpers/Hashing";
import { createUser } from "@/services/UserService";
import { NextFunction, Request, Response } from "express";

export const createUserAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, roleId,referralId } = req.body;

    
    if (!email || !password || !roleId) {
      return res.status(400).send({
        error: true,
        message: 'Missing required fields: email, password, roleId'
      });
    }
    const hashedPassword = await HashPassword({password});

    
    const createdUser = await createUser({ email, password: hashedPassword, roleId,referralId});

    
    res.status(200).send({
      error: false,
      message: 'Register Success!',
      data: createdUser
    });
  } catch (error) {

    console.error('Error creating user:', error);
   
    next(error);
  }
};
