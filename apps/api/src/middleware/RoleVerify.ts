
import { findUserByUid } from "@/services/Auth";
import { NextFunction, Request, Response } from "express";

interface IReqPayload extends Request{
  payload: any
}

export const roleVerifyEO = async(req: Request, res: Response, next: NextFunction) =>{
  try {
    const reqPayload = req as IReqPayload
    const payload = reqPayload.payload

    const findUserByRoleUidResult = await findUserByUid({uid: payload.uid})
    if(!findUserByRoleUidResult) throw new Error('User Not Found!')
    console.log(findUserByRoleUidResult)

    const authorized = ['Event Organizer']
    if(authorized.includes(findUserByRoleUidResult?.role.name)){
      next()
    }else{
      throw new Error('Unauthorized User')
    }
  } catch (error) {
    next(error)
  }
}