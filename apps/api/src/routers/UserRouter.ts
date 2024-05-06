import { createUserAccount } from "@/controllers/UserController";
import { Router } from "express";

const router = Router();

router.post('/', createUserAccount)

export default router