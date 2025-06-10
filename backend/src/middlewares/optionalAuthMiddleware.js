import jwt from "jsonwebtoken";

export const optionalAuthMiddleware = (req, res, next) => {
  try {
    const token = req.cookies?.auth_token;

    if (token) {
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      req.user = decoded;
    } else {
      req.user = null;
    }
  } catch (error) {
    console.warn("Optional Auth Middleware: Invalid token, proceeding unauthenticated");
    req.user = null;
  }

  next();
};
