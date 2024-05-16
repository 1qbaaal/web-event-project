import { TicketEventController } from "@/controllers/TicketController/create";
import { Router } from "express";

const router = Router();

router.post('/', TicketEventController);

export default router