import express from "express";
import { prisma } from "../utils/prisma/index.js";
import { ChoiceController } from "../controllers/choice.controller.js";
import { ChoiceService } from "../services/choice.service.js";
import { ChoiceRepository } from "../repositories/choice.repository.js";
import needSign from "../middleware/needSignIn.middleware.js";

const router = express.Router();

const choiceRepository = new ChoiceRepository(prisma);
const choiceService = new ChoiceService(choiceRepository);
const choiceController = new ChoiceController(choiceService);

// 답변 채택 API
router.post(
  "/questions/:questionId/answers/:answerId",
  needSign,
  choiceController.postChoice
);

// 답변 채택 취소 API
router.patch(
  "/questions/:questionId/answers/:answerId",
  needSign,
  choiceController.patchChoice
);
export default router;
