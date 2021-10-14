import express, { Request, Response } from "express";
const db = require("./config/database");

const app = express();

app.use(express.json());

app.get("/users", async (req: Request, res: Response) => {
  const { rows: user } = await db.query(
    "select * from users where email = " + req.body.email,
  );
  res.status(200).json({ response: user });
});
app.post("/users", async (req: Request, res: Response) => {
  const { rows: user } = await db.query(
    "INSERT INTO users (email, senha) VALUES ($1, $2)",
    [req.body.email, req.body.senha],
  );
  res.status(200).json({ response: true });
});

app.listen(3000, () => {
  console.log("server is running");
});
