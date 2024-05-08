import { listEvent } from "@/services/EventService/list";
import { NextFunction, Request, Response } from "express"

export const listEventById = async(req: Request, res: Response, next: NextFunction) =>{
  try {
    const { page, per_page } = req.query;

    const listEventResult = await listEvent({
      page,
      per_page
    })

    res.status(200).send({
      error: false,
      message: 'List Event Success!',
      data: listEventResult
    })
  } catch (error) {
    next(error)
  }
}
