import { getListCategory } from '@/controllers/EventController/Category/category';
import { Router } from 'express';

const router = Router();

router.use('/', getListCategory);

export default router;
