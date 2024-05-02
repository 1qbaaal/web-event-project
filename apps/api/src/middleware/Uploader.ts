import { NextFunction, Request, Response } from "express";
import { multerUpload } from "../helpers/Multer";
import { rmSync } from "fs";

export const uploader = (req: Request, res: Response, next: NextFunction) => {
    const upload = multerUpload.fields([{ name: 'images', maxCount: 3 }]);

    upload(req, res, function (err) {
        try {
            if (err) throw err;

            if (req.files) {
                const uploadedFiles = Array.isArray(req.files) ? req.files : req.files['images'];

                if (Array.isArray(uploadedFiles)) {
                    uploadedFiles.forEach((file: Express.Multer.File) => {
                        if (file.size > 10000000) {
                            throw { message: `${file.originalname} is Too Large` };
                        }
                    });
                }
            }

            // No errors, continue to the next middleware
            next();
        } catch (error:any) {
            // Clean up uploaded files in case of error
            if (req.files) {
                const uploadedFiles = Array.isArray(req.files) ? req.files : req.files['images'];
                if (Array.isArray(uploadedFiles)) {
                    uploadedFiles.forEach(item => {
                        rmSync(item.path);
                    });
                }
            }
            
            // Pass the error to the error handling middleware
            next({
                status: 500,
                message: error.message
            });
        }
    });
};
