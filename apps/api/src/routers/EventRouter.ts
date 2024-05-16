import { createEventController } from '@/controllers/EventController/create';
import { Router } from 'express';
import { getAllEventResult, getEventByParams } from '@/controllers/EventController/get';
import { UpdateEventAndImage } from '@/controllers/EventController/update';
import { listEventById } from '@/controllers/EventController/list';
import { deleteEventById } from '@/controllers/EventController/delete';
import { uploader } from '@/middleware/Uploader';

const router = Router();

router.post('/create', uploader, createEventController);
router.get('/:id', getEventByParams);
router.get('/', getAllEventResult);
router.put('/edit/:id', uploader, UpdateEventAndImage);
router.delete('/', deleteEventById);

export default router;
