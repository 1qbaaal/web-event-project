import { deletePromotionService } from "@/services/PromotionService/delete";
import { NextFunction, Request, Response } from "express";

export const deletePromotion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.body
    await deletePromotionService({
      id: parseInt(id)
    })

    res.status(200).send({
      error: false,
      message: 'Delete Promotion Success!',
      data: null
    })
  } catch (error) {
    next(error)
  }
}