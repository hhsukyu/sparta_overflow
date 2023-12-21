import express from "express";
import { prisma } from "../utils/prisma/index.js";
import { UsersController } from "../controllers/users.controller.js";
import { UsersService } from "../services/users.service.js";
import { UsersRepository } from "../repositories/users.repository.js";
import needManger from "../middleware/needManager.middleware.js";
// import needSign from "../middleware/needSignIn.middleware.js";

const router = express.Router();

const usersRepository = new UsersRepository(prisma);
const usersService = new UsersService(userRepository);
const usersController = new UsersController(userService);

router.put("/:id", needManger, userController.putuser);

export default router;
