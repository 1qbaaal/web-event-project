import { Request, Response, NextFunction } from "express"
import { createEventType, listEventType } from "@/services/EventService/Type/eventType"


export const createEventTypeController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name } = req.body
    await createEventType({ name })

    res.status(200).send({
      error: false,
      message: 'Create Event Type Success!',
      data: null
    })
  } catch (error) {
    next(error)
  }
}

export const getEventTypeController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const getEventType = await listEventType()
    res.status(200).send({
      error: false,
      message: 'Get Event Type Success!',
      data: getEventType
    })
  } catch (error) {
    next(error)
  }
}