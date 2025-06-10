import { asyncHandler } from "../utils/async-handler.js";
import jwt from 'jsonwebtoken'

export const getCurrentUser = asyncHandler((req, res) => {
  const token = req.cookies?.auth_token;

  if (!token) {
    return res.status(200).json(null);
  }

  const user = jwt.verify(token, process.env.JWT_SECRET);

  return res.status(200).json(user);
});
