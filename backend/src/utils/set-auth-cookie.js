import jwt from "jsonwebtoken";

export const setAuthCookie = (user, res) => {
  const { _id, id, name, imageUrl, email } = user;

  const token = jwt.sign(
    { id: _id || id, email, name, imageUrl },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
    }
  );

  res.cookie("auth_token", token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 7 * 24 * 60 * 60 * 1000,
    sameSite: "None",
    domain: ".vercel.app"
  });
};
