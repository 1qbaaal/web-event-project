import express, { Router } from 'express';
import EventRouter from './EventRouter';
import AuthRouter from './AuthRouters';
import UserRouter from './UserRouter';

const router = Router();
router.use(express.json());

router.use('/event', EventRouter);
router.use('/auth', AuthRouter);
router.use('/user', UserRouter);

export default router;
