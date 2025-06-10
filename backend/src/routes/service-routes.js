import express from "express";
import {
  createService,
  deleteService,
  getSerivceBySlug,
  getServices,
  updateService
} from "../controllers/service-conroller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";
import { userMiddleware } from "../middlewares/user-middleware.js";

const router = express.Router();

router.get("/", userMiddleware, getServices);
router.get("/:slug", authMiddleware, getSerivceBySlug);

router.post("/", authMiddleware, createService);

router.put("/:slug", authMiddleware, updateService);

router.delete("/:id", authMiddleware, deleteService);

export default router;
