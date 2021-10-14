const express = require("express");
const { Pool } = require("pg");

const dotenv = require("dotenv");
dotenv.config();
const app = express();

const pool = new Pool({
  connectionString: "postgres://postgres:root@localhost:5432/banco",
});

pool.on("connect", () => {
  console.log("Conectou");
});

app.get("/usuarios", async (req, res) => {
  const { rows: user } = await pool.query(
    "select * from usuarios where nome = " + req.body.nome
  );
  res.status(200).json({ response: user });
});

app.listen(3000, () => {
  console.log("iniciado");
});
