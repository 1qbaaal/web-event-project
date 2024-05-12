import { createLocationController, findLocationController } from "@/controllers/EventController/Location/location";
import { Router } from "express";

const router = Router();

router.post('/', createLocationController)
router.get('/list', findLocationController)

export default router