import { deleteEvent } from '@/service/EventService/delete';
import { error } from 'console';
import { NextFunction, Request, Response } from 'express';

export const deleteEventById = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.body
    await deleteEvent({
      id: parseInt(id),
    });

    res.status(200).send({
      error:false,
      message: 'Delete Event Success!',
      data: null
    })
  } catch (error) {
    next(error);
  }
};
