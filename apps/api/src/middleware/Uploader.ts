import { DeletedUploadFiles } from "@/helpers/DeletedUploadFiles";
import { multerUpload } from "@/helpers/Multer";
import { NextFunction, Request, Response } from "express";

export const uploader = (req: Request, res: Response, next: NextFunction) =>{
  const upload = multerUpload.fields([{name: 'images', maxCount:5}]);

  upload(req, res, function(err) {
    try {
      if(err) throw err;

      if(req.files){
        const uploadedFiles = Array.isArray(req.files)
        ? req.files
        : req.files['images']

        if(Array.isArray(uploadedFiles)){
          uploadedFiles?.forEach((file: any) =>{
            if(file.size > 1000000)
              throw new Error(`File ${file.originalname} is too Large!`)
          })
        }
      }

      next()
    } catch (error) {
      DeletedUploadFiles(req.files)

      next(error)
    }
  })
}