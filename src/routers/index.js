import express from "express";
import AuthRouter from "./auth.router.js";
import UsersRouter from "./users.router.js";
import QuestionsRouter from "./questions.router.js";
import AnswersRouter from "./answers.router.js";
const router = express.Router();

router.use("/", AuthRouter);
router.use("/users", UsersRouter);
router.use("/questions", QuestionsRouter);
router.use("/answers", AnswersRouter);

export default router;
