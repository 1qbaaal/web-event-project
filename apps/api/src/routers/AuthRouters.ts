import { Router } from "express";
import { loginController } from "../controllers/Auth/authControllers"
import { roleVerifyEO } from "@/middleware/RoleVerify";

const router = Router()

router.post('/login-user',loginController)

export default router