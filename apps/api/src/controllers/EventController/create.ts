import { createEvent } from '@/services/EventService/create';
import { create } from 'domain';
import { NextFunction, Request, Response } from 'express';
import { deleteEventById } from './delete';
import { DeletedUploadFiles } from '@/helpers/DeletedUploadFiles';

export const createEventController = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const data = JSON.parse(req.body.data)

    if(req.files){
      const uploadedFiles = Array.isArray(req.files)? req.files : req.files['images']

      await createEvent(data, uploadedFiles)
    }
    res.status(200).send({
      error: false,
      message: 'Create Event Success!',
      data: null,
    });
  } catch (error) {
    DeletedUploadFiles(req.files)

    next(error);
  }
};
