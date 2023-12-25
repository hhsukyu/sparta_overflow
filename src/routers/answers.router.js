import express from "express";
import { prisma } from "../utils/prisma/index.js";
import { AnswersController } from "../controllers/answers.controller.js";
import { AnswersService } from "../services/answers.service.js";
import { AnswersRepository } from "../repositories/answers.repository.js";
import needSign from "../middleware/needSignIn.middleware.js";

const router = express.Router();

const answersRepository = new AnswersRepository(prisma);
const answersService = new AnswersService(answersRepository);
const answersController = new AnswersController(answersService);

// 답변글 리스트 API
router.get("/:questionId", needSign, answersController.getAllAnswers);

// 답변글 작성 API
router.post("/:questionId", needSign, answersController.postAnswer);

// 답변글 수정 API
router.put("/:answerId", needSign, answersController.putAnswer);

// 답변글 삭제 API
router.delete("/:answerId", needSign, answersController.deleteAnswer);

export default router;
