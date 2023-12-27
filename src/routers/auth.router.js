import express from "express";
import { prisma } from "../utils/prisma/index.js";
import { AuthController } from "../controllers/auth.controller.js";
import { AuthService } from "../services/auth.service.js";
import { AuthRepository } from "../repositories/auth.repository.js";
// import needSign from "../middleware/needSignIn.middleware.js";

const router = express.Router();

const authRepository = new AuthRepository(prisma);
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);

// 회원가입
router.post("/sign-up", authController.signUp);
// 로그인
router.post("/sign-in", authController.signIn);

export default router;
