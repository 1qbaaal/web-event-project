import { getAllEvent, getEventById } from '@/services/EventService/get';
import { NextFunction, Request, Response } from 'express';

export const getEventByParams = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const listEventResult = await getEventById({
      id,
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

export const getAllEventResult = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const getAllEventResult = await getAllEvent()
    
    res.status(200).send({
      error: false,
      message: 'Get Event Success',
      data: getAllEventResult
    })
  } catch (error) {
    next(error)
  }
}
