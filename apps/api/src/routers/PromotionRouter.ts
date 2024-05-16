import { createPromotionEvent } from "@/controllers/PromotionController/create";
import { deletePromotion } from "@/controllers/PromotionController/delete";
import { getPromotion } from "@/controllers/PromotionController/get";
import { Router } from "express";

const router = Router()

router.post('/', createPromotionEvent)
router.get('/:id', getPromotion)
router.delete('/', deletePromotion)

export  default router;