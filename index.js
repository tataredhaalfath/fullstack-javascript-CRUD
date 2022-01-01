import express from "express";
import db from "./config/db.js";
import productRoutes from "./routes/index.js";
import cors from "cors";

const app = express();
try {
  //cek authenticate db
  await db.authenticate();
  console.log("Database connected");
} catch (error) {
  console.error("connection error");
}
app.use(cors());
app.use(express.json());

app.use("/products", productRoutes);
app.listen(5000, () => {
  console.log("server listen on http://localhost:5000");
});
