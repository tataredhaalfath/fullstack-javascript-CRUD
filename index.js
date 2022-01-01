import express from "express";
import db from "./config/db.js";

const app = express();

try {
  //cek authenticate db
  await db.authenticate();
  console.log("Database connected");
} catch (error) {
  console.error("connection error");
}
app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(5000, () => {
  console.log("server listen on http://localhost:5000");
});
