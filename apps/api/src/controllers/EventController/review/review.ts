import { createReveiew } from "@/services/EventService/review/review";
import { NextFunction, Request, Response } from "express";

export const createReviewController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { rating, comment, eventId, userUid } = req.body;

    await createReveiew({
      rating,
      comment,
      eventId,
      userUid
    })

    res.status(200).send({
      error: false,
      message: 'Create Review Success!',
      data: null
    })
  } catch (error) {
    next(error)
  }
}