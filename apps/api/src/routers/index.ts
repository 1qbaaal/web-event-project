import express, { Router } from "express";
import EventRouter from './EventRouter'
import PromotionRouter from './PromotionRouter'

const router = Router();
router.use(express.json());

router.use('/event', EventRouter)
router.use('/promotion', PromotionRouter)

export default router
