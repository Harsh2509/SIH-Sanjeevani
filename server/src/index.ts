import express from "express";
import mongoose from "mongoose";
import { config } from "dotenv";
import cors from "cors";
import userRouter from "./routes/user";
const app = express();
config();

const DB_LINK = process.env.DB_LINK || "mongodb://127.0.0.1:27017/SIH";
const PORT = process.env.PORT || 3000;

mongoose
  .connect(DB_LINK)
  .then(() => {
    console.log("Connection to DB established!");
    app.listen(3000, () => {
      console.log(`Listening at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.log(`Error: {${err}}`);
  });

app.use(cors());
app.use(express.json());

app.use("/user", userRouter);
