import express, { Router } from "express";
import EventRouter from './EventRouter'

const router = Router();
router.use(express.json());

router.use('/event', EventRouter)

export default router
