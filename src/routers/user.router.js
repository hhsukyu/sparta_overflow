import express from "express";
import { prisma } from "../utils/prisma/index.js";
import { UserController } from "../controllers/user.controller.js";
import { UserService } from "../services/user.service.js";
import { UserRepository } from "../repositories/user.repository.js";
import needManger from "../middleware/needManager.middleware.js";
// import needSign from "../middleware/needSignIn.middleware.js";

const router = express.Router();

const userRepository = new UserRepository(prisma);
const userService = new UserService(userRepository);
const userController = new UserController(userService);

router.put("/:id", needManger, userController.putuser);

export default router;
