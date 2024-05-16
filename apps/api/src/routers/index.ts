import express, { Router } from 'express';
import EventRouter from './EventRouter';
import AuthRouter from './AuthRouters';
import UserRouter from './UserRouter';
import CategoryRouter from './CategoryRouter';
import LocationRouter from './LocationRouter';
import TypeRouter from './TypeRouter';
import TicketRouter from './TicketRouter';
import PromotionRouter from './PromotionRouter';
import ReviewRouter from './ReviewRouter';

const router = Router();
router.use(express.json());

router.use('*/image',express.static('src/public/image'))

router.use('/event', EventRouter);
router.use('/auth', AuthRouter);
router.use('/user', UserRouter);
router.use('/category', CategoryRouter);
router.use('/location', LocationRouter);
router.use('/type', TypeRouter);
router.use('/ticket', TicketRouter)
router.use('/promotion', PromotionRouter);
router.use('/review', ReviewRouter)


export default router;
