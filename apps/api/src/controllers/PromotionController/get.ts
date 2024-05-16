import { Request, Response, NextFunction } from "express"
import { getPromotionService } from "@/services/PromotionService/get";

export const getPromotion = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params;

    const listPromotionResult = await getPromotionService({
      id: parseInt(id),
    })

    res.status(200).send({
      error: false,
      message: 'Get Promotion Success',
      data: listPromotionResult
    })
  } catch (error) {
    next(error)
  }
}