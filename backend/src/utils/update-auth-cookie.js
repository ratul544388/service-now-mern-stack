import jwt from "jsonwebtoken";

export const updateAuthCookie = (updatedData, req, res) => {
  const token = req.cookies?.auth_token;

  if (!token) return;

  try {
    const decoded = jwt.decode(token, { complete: true });

    if (!decoded || !decoded.payload || !decoded.payload.exp) return;

    const { id, email, exp } = decoded.payload;

    const expiresInMs = exp * 1000 - Date.now();
    if (expiresInMs <= 0) return;

    const newToken = jwt.sign(
      {
        id,
        email,
        name: updatedData.name,
        imageUrl: updatedData.imageUrl,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: Math.floor(expiresInMs / 1000),
      }
    );

    res.cookie("auth_token", newToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: expiresInMs,
      sameSite: process.env.NODE_ENV === "production" ? "None" : "Lax",
    });
  } catch (err) {
    console.error("Failed to update auth cookie:", err);
  }
};
