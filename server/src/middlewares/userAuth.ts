import { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { User } from "../database";

const secret = process.env.secret || "t3rc3Ssdkfaldfgiurxcmnbuhjvcnbgiegouy";

export default function userAuthenticationJWT(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(" ")[1];

  if (!token) {
    return res.status(401).json({ message: "Authorization token is missing" });
  }
  jwt.verify(token, secret, async (err, user) => {
    if (err) {
      return res
        .status(401)
        .json({ message: "You token has expired, Please login again!" });
    } else if (typeof user === "string") {
      return res
        .status(401)
        .json({ error: "User is in string format at jwt authentication" });
    } else if (!user) {
      return res
        .status(401)
        .json({ error: "User is null at userAuthentication" });
    }
    const userDetails = await User.findOne({ username: user.username });
    if (!userDetails || userDetails.username !== user.username) {
      return res
        .status(401)
        .json({ message: "Username doesn't exist. Please SignUp!" });
    }
    next();
  });
}
