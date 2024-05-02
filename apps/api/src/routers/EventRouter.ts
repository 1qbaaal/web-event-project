import { createEventController } from '@/controllers/EventController/create';
import { roleVerifyEO } from '@/middleware/RoleVerify';
import { Router } from 'express';
import { getEventByParams } from '@/controllers/EventController/get';
import { updateEventResultByUserId } from '@/controllers/EventController/update';
import { listEventById } from '@/controllers/EventController/list';

const router = Router();

router.post('/create', roleVerifyEO, createEventController);
router.get('/:id', getEventByParams);
router.get('/', listEventById)
router.put('/edit/:id', updateEventResultByUserId)

export default router;
