import { createTicket } from "@/services/TicketService/create";
import { NextFunction, Request, Response } from "express";

export const TicketEventController = async(req: Request, res: Response, next: NextFunction) => {
  try {
    const { totalTicket, typeTicket, price, eventId} = req.body;

    await createTicket({
      totalTicket,
      typeTicket,
      price,
      eventId
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