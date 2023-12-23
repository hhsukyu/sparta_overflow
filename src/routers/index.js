import express from "express";
import AuthRouter from "./auth.router.js";
import UsersRouter from "./users.router.js";
import QuestionsRouter from "./questions.router.js";
const router = express.Router();

router.use("/", AuthRouter);
router.use("/users", UsersRouter);
router.use("/questions", QuestionsRouter);

export default router;
