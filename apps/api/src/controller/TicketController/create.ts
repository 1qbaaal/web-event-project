import { createTicket } from "@/service/TicketService/create";
import { NextFunction, Request, Response } from "express";

export const TicketEventController = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const { totalTicket, typeTicket, price, eventid, userId } = req.body;

    await createTicket({
      totalTicket,
      typeTicket,
      price,
      eventid,
      userId
    })

    res.status(200).send({
      error: false,
      message: 'Create Ticket Success!',
      data: null
    })
  } catch (error) {
    next(error)
  }
}