import { Router } from "express";

const authRouter = Router();

authRouter.get("/", (req, res) => {
  res.send("Welcome to Auth Router");
});

export default authRouter;
