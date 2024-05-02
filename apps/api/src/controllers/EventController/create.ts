import { createEvent } from '@/service/EventService/create';
import { NextFunction, Request, Response } from 'express';

export const createEventController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const {
      name,
      price,
      schedule,
      location,
      description,
      category,
      typeEvent,
      userId,
    } = req.body;

    await createEvent({
      name,
      price,
      schedule,
      location,
      description,
      category,
      typeEvent,
      userId,
    });

    res.status(200).send({
      error: false,
      message: 'Create Event Success!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
