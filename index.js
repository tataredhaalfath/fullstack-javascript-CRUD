import express from "express";
import db from "./config/db.js";
import productRoutes from "./routes/index.js";

const app = express();
try {
  //cek authenticate db
  await db.authenticate();
  console.log("Database connected");
} catch (error) {
  console.error("connection error");
}
app.use(express.json());

app.use("/products", productRoutes);
app.listen(3000, () => {
  console.log("server listen on http://localhost:3000");
});
