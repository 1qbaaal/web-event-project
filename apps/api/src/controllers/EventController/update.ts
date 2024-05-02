import { updateEvent } from "@/service/EventService/update";
import { NextFunction, Request, Response } from "express";

export const updateEventResultByUserId = async(req: Request, res: Response, next: NextFunction) =>{
  try {
    const { name, price, schedule, location, description, category, typeEvent, userId } = req.body;
    const { id } = req.params
    const updateEventResult = await updateEvent({
      id: parseInt(id)
    },{
      name,
      price,
      schedule,
      location,
      description,
      category,
      typeEvent,
      userId
    })
    return res.status(200).send({
      error: false,
      message: 'Update Event Success!',
      data: updateEventResult
    })
  } catch (error) {
    next(error)
  }
}