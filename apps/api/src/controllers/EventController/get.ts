import { getEvent } from '@/service/EventService/get';
import { NextFunction, Request, Response } from 'express';

export const getEventByParams = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const listEventResult = await getEvent({
      id: parseInt(id),
    });
   
    res.status(200).send({
      error: false,
      message: 'Get Event Success',
      data: listEventResult,
    });
  } catch (error) {
    next(error);
  }
};
