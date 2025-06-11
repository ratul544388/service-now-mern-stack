import jwt from "jsonwebtoken";
import { db } from "../lib/db.js";
import { asyncHandler } from "../utils/async-handler.js";
import { updateProfileSchema } from "../validations/index.js";
import { updateAuthCookie } from "../utils/update-auth-cookie.js";

export const getCurrentUser = asyncHandler((req, res) => {
  const token = req.cookies?.auth_token;

  if (!token) {
    return res.status(200).json(null);
  }

  const user = jwt.verify(token, process.env.JWT_SECRET);

  return res.status(200).json(user);
});

export const updateUser = asyncHandler(async (req, res) => {
  const values = updateProfileSchema.parse(req.body);
  const user = await db.user.update({
    where: {
      id: req.user.id,
    },
    data: values,
  });

  updateAuthCookie(user, req, res);

  return res.status(200).json(user);
});
