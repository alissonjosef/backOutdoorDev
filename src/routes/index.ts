// src/routes/index.ts
import { Request, Response, Router } from "express";
import authRouter from "./auth";
import productRouter from "./product";
import userRouter from "./user";

const router = Router();

router.get("/", (req: Request, res: Response) => {
  res.json("Bem-vindo ao servidor Node.js com TypeScript e MongoDB!");
});

router.use("/user", userRouter, authRouter, productRouter);

export default router;
