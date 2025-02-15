import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import authRouter from "./routes/auth";

//For env File
dotenv.config();

const app: Application = express();
const port = process.env.PORT || 8000;

app.use("/api/auth", authRouter);

app.get("/api", (req: Request, res: Response) => {
  res.json({ message: "Welcome to Express Server" });
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});
