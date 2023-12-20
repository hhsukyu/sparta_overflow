import express from "express";
import { Prisma } from "@prisma/client";
import { AuthController } from "../controllers/auth.controller.js";
import { AuthService } from "../services/auth.service.js";
import { AuthRepository } from "../repositories/auth.repository.js";
import needSign from "../middleware/needSignIn.middleware.js";

const router = express.Router();

const authRepository = new AuthRepository(Prisma);
const authService = new AuthService(authRepository);
const authController = new AuthController(authService);

// 회원가입

router.post("/sign-in", authController.signIn);
