import { Router } from "express";
import { loginController } from "../controllers/Auth/authControllers"

const router = Router()

router.post('/login-user', loginController)

export default router