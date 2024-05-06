import { createPromotionEvent } from "@/controllers/PromotionController/create";
import { Router } from "express";

const router = Router()

router.post('/', createPromotionEvent)

export  default router
