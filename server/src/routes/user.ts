import express, { NextFunction, Request, Response } from "express";
import * as jwt from "jsonwebtoken";
import { ZodObject, z } from "zod";
import { User } from "../database";
const router = express.Router();
const secret = process.env.SECRET || "t3rc3Ssdkfaldfgiurxcmnbuhjvcnbgiegouy";

const loginSchema = z.object({
  email: z.string().email().max(200),
  password: z.string().min(8).max(100),
});

const signUpSchema = z.object({
  username: z.string().max(100).min(5),
  password: z.string().min(8).max(100),
  email: z.string().email().max(200),
});

/** -----------------------------INPUT VALIDATION FUNCTION----------------------------- */

function validate(schema: z.ZodObject<any, any>) {
  return (req: Request, res: Response, next: NextFunction) => {
    const result = schema.safeParse(req.body);
    if (result.success) next();
    else
      res.status(404).json({
        error: "Input Validation Failed",
        details: result.error.flatten(),
      });
  };
}

/** -------------------------------------ROUTES------------------------------------- */

router.post("/signup", validate(signUpSchema), async (req, res) => {
  const user = req.body;
  const dbUser = await User.findOne({ username: user.username });
  if (dbUser) {
    return res
      .status(403)
      .json({ message: "User already exists. Please Log In." });
  }
  const token = jwt.sign({ username: user.username }, secret);

  const newUser = new User(user);
  await newUser.save();
  res.json({ message: "User created successfully!", token });
});

router.post("/login", validate(loginSchema), async (req, res) => {
  const user = req.body;
  const dbUser = await User.findOne({
    email: user.email,
    password: user.password,
  });
  if (!dbUser) {
    return res
      .status(403)
      .json({ message: "New User. Please SignUp before loging in" });
  }
  const token = jwt.sign({ username: user.username }, secret);
  res.json({ message: "Logged in successfully", token });
});

export default router;
