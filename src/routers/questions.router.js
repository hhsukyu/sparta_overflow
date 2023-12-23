import express from "express";
import { prisma } from "../utils/prisma/index.js";
import { QuestionsController } from "../controllers/questions.controller.js";
import { QuestionsService } from "../services/questions.service.js";
import { QuestionsRepository } from "../repositories/questions.repository.js";
import needSign from "../middleware/needSignIn.middleware.js";
import needSignInMiddleware from "../middleware/needSignIn.middleware.js";

const router = express.Router();

const questionsRepository = new QuestionsRepository(prisma);
const questionsService = new QuestionsService(questionsRepository);
const questionsController = new QuestionsController(questionsService);

// 질문글 리스트 API (검색기능 X)
router.get("/", needSign, questionsController.getAllQuestions);
// 질문글 리스트 API 검색 기능 포함 완성
router.get("/keyword", needSign, questionsController.getQuestionsByKeyword);

// 질문글 작성하기
router.post("/", needSign, questionsController.postQuestion);

// 질문글 수정하기
router.put("/:questionId", needSign, questionsController.putQuestion);

export default router;
