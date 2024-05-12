import { createEventTypeController, getEventTypeController } from '@/controllers/EventController/Type/eventType';
import { Router } from 'express';

const router = Router();

router.post('/', createEventTypeController);
router.get('/list', getEventTypeController);

export default router;
