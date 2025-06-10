import jwt from "jsonwebtoken";

export const userMiddleware = (req, res, next) => {
  try {
    const token = req.cookies?.auth_token;

    if (!token) {
      res.user = null;
      next();
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;

    next();
  } catch (error) {
    console.error("Auth Middleware Error:", error);
    return res.status(401).json({ message: "Invalid or expired token" });
  }
};
