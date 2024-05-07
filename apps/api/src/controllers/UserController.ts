import { HashPassword } from "@/helpers/Hashing";
import { createUser } from "@/service/UserService";
import { NextFunction, Request, Response } from "express";

export const createUserAccount = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password, roleId } = req.body;

    // Check if required fields are provided
    if (!email || !password || !roleId) {
      return res.status(400).send({
        error: true,
        message: 'Missing required fields: email, password, roleId'
      });
    }

    // Hash the password
    const hashedPassword = await HashPassword({password});

    // Create the user
    const createdUser = await createUser({ email, password: hashedPassword, roleId });

    // Send success response
    res.status(200).send({
      error: false,
      message: 'Create User Success!',
      data: createdUser
    });
  } catch (error) {
    // Log error
    console.error('Error creating user:', error);
    // Pass error to error handling middleware
    next(error);
  }
};
