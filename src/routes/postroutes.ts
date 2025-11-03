import { Router } from "express";
import { createPost, getPosts } from "../controllers/postcontroller";

const router = Router();
router.post("/", createPost);
router.get("/", getPosts);
export default router;
