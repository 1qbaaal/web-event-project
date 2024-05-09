import { prisma } from "@/connection";
import { ICreateUser  } from "./types";
import { Request,Response } from "express";

export const createUser = async ({email,password,roleId,referralId}: ICreateUser) => {
  await prisma.user.create({
    data:{
      email,
      password,
      roleId,
      referralId,
    }
  })
  //add points everytime

}