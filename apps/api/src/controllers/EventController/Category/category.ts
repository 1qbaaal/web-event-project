import { listCategory } from "@/services/EventService/category/category";
import { NextFunction, Request, Response } from "express";

export const getListCategory = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const getCategory = await listCategory()
    
    res.status(200).send({
      error: false,
      message: 'List Category Success!',
      data: getCategory
    })
  } catch (error) {
    next(error)
  }
}