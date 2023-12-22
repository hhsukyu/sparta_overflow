import express from "express";
import { prisma } from "../utils/prisma/index.js";
import { QuestionsController } from "../controllers/questions.controller.js";
import { QuestionsService } from "../services/questions.service.js";
import { QuestionsRepository } from "../repositories/questions.repository.js";

const router = express.Router();

const questionsRepository = new QuestionsRepository(prisma);
const questionsService = new QuestionsService(questionsRepository);
const questionsController = new QuestionsController(questionsService);

// 질문글 리스트 API (검색기능 X)
router.get("/", questionsController.getAllQuestions);

// 질문글 리스트 API 검색 기능 포함 완성
router.get("/keyword", questionsController.getQuestionsByKeyword);
export default router;
