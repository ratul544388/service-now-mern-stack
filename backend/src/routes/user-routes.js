import express from "express";
import { getCurrentUser, updateUser } from "../controllers/user-controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/me", getCurrentUser);

router.put("/me", authMiddleware, updateUser);

export default router;
