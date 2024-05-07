import { createPromotion } from "@/services/PromotionService/create";
import { NextFunction, Request, Response } from "express";

export const createPromotionEvent = async(req: Request, res: Response, next: NextFunction) =>{
  try {
    const { description, discount, startDate, endDate, eventId } = req.body

    await createPromotion({
      description,
      discount,
      startDate,
      endDate,
      eventId
    })

    res.status(200).send({
      error: false,
      message: 'Create Promotion Success!',
      data: null
    })
  } catch (error) {
    next(error)
  }
}