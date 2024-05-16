import { createReviewController } from '@/controllers/EventController/review/review';
import { Router } from 'express';

const router = Router();

router.post('/', createReviewController)

export default router;
