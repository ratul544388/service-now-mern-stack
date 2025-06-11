import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import { db } from "./lib/db.js";
import imageUploadRoutes from "./routes/image-upload.routes.js";
import cookieParser from "cookie-parser";
import session from "express-session";
import passport from "passport";

import "./lib/passport.js";

import authRoutes from "./routes/auth.routes.js";
import userRoutes from "./routes/user-routes.js";
import serviceRoutes from "./routes/service-routes.js";
import bookingRoutes from "./routes/booking-routes.js";

dotenv.config();
const PORT = process.env.PORT || 5000;

const app = express();

const corsConfig = {
  methods: ["GET", "POST", "PUT", "DELETE"],
  origin: process.env.VITE_APP_URL,
  credentials: true,
};

app.options("", cors(corsConfig));
app.use(cors(corsConfig));

app.use(
  session({
    secret: process.env.JWT_SECRET,
    resave: false,
    saveUninitialized: false,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(cookieParser());
app.use(express.json());

app.get("/", (req, res) => {
  res.send({
    message: "Server is running",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/bookings", bookingRoutes);

app.use("/api/image-upload", imageUploadRoutes);

app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  try {
    await db.$connect();
    console.log("✅✅✅ Connected to MongoDB via Prisma");
  } catch (error) {
    console.error("❌❌❌ Prisma connection failed", error);
  }
});
