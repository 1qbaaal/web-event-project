import { prisma } from "@/connection";
import { ICreateUser  } from "./types";

export const createUser = async ({
  email,
  password,
  roleId,
}: ICreateUser) => {
  await prisma.user.create({
    data:{
      email,
      password,
      roleId
    }
  })
}