import express from "express";
import AuthRouter from "./auth.router.js";
import UserRouter from "./user.router.js";
const router = express.Router();

router.use("/", AuthRouter);
router, use("/users", UserRouter);

export default router;
