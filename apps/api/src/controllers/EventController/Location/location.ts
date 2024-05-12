import { createLocation, listLocation } from '@/services/EventService/location/location';
import { Request, Response, NextFunction } from 'express';

export const createLocationController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { city, province, zip } = req.body;

    await createLocation({ city, province, zip });

    res.status(200).send({
      error: false,
      message: 'Create Location Success!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};

export const findLocationController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) =>{
  try {
    const getListLocation = await listLocation();

    res.status(200).send({
      error: false,
      message: 'Get List Location Success!',
      data: getListLocation,
    })
  } catch (error) {
    next(error)
  }
}
