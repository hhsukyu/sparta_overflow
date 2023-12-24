import express from "express";
import { prisma } from "../utils/prisma/index.js";
import { AsksController } from "../controllers/asks.controller.js";
import { AsksService } from "../services/asks.service.js";
import { AsksRepository } from "../repositories/asks.repository.js";
import needSign from "../middleware/needSignIn.middleware.js";

const router = express.Router();

const asksRepository = new AsksRepository(prisma);
const asksService = new AsksService(asksRepository);
const asksController = new AsksController(asksService);

// 답변글 리스트 API
router.get("/", needSign, asksController.getAllAsks);

export default router;
