import { Router } from "express";
import { asyncHandler } from "../utils/async-handler.js";
import multer from "multer";
import cloudinary from "../lib/cloudinary.js";
import streamifier from "streamifier";

export const imageUpload = asyncHandler(async (req, res) => {
  if (!req.file) return res.status(400).json({ error: "No file uploaded" });

  const streamUpload = (fileBuffer) => {
    return new Promise((resolve, reject) => {
      const stream = cloudinary.uploader.upload_stream(
        { folder: "programming-hero-assignment-11" },
        (error, result) => {
          if (result) resolve(result);
          else reject(error);
        }
      );
      streamifier.createReadStream(fileBuffer).pipe(stream);
    });
  };

  const result = await streamUpload(req.file.buffer);

  return res.status(200).json({ imageUrl: result.secure_url });
});

const storage = multer.memoryStorage();
const upload = multer({ storage });

const router = Router();

router.post("/", upload.single("image"), imageUpload);

export default router;
