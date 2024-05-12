import express, { Router } from 'express';
import EventRouter from './EventRouter';
import AuthRouter from './AuthRouters';
import UserRouter from './UserRouter';
import CategoryRouter from './CategoryRouter';
import LocationRouter from './LocationRouter';
import TypeRouter from './TypeRouter';
import TicketRouter from './TicketRouter';

const router = Router();
router.use(express.json());

router.use('/event', EventRouter);
router.use('/auth', AuthRouter);
router.use('/user', UserRouter);
router.use('/category', CategoryRouter);
router.use('/location', LocationRouter);
router.use('/type', TypeRouter);
router.use('/ticket', TicketRouter)

export default router;
