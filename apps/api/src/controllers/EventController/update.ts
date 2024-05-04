import { updateEvent } from '@/service/EventService/update';
import { NextFunction, Request, Response } from 'express';
import { DeletedUploadFiles } from '@/helpers/DeletedUploadFiles';

export const UpdateEventAndImage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const { id } = req.params;
    const data = JSON.parse(req.body.data);

    if (req.files) {
      const updatedFiles = Array.isArray(req.files)
        ? req.files
        : req.files['images'];

      const updatedEventResult = await updateEvent(data, updatedFiles, id);
      DeletedUploadFiles({ images: updatedEventResult });
    }
    res.status(200).send({
      error: false,
      message: 'Update Event Success!',
      data: null,
    });
  } catch (error) {
    next(error);
  }
};
