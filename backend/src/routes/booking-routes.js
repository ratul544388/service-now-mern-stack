import express from "express";

import {
  cancelBooking,
  createBooking,
  getBookings,
  updateBooking,
} from "../controllers/booking-controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.get("/", authMiddleware, getBookings);

router.post("/:serviceId", authMiddleware, createBooking);

router.delete("/:serviceId", authMiddleware, cancelBooking);

router.put("/:bookingId", authMiddleware, updateBooking);

export default router;
