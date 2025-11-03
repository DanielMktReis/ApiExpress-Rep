import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import userRoutes from "./routes/userroutes";
import postRoutes from "./routes/postroutes";
import commentRoutes from "./routes/commentroutes";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);
app.use("/api/comment", commentRoutes);

app.listen(3000, () => console.log("🚀 Servidor rodando na porta 3000"));
