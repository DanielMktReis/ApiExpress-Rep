import { Request, Response } from "express";
import prisma from "../PrismaService";

export const createPost = async (req: Request, res: Response) => {
  try {
    const post = await prisma.post.create({ data: req.body });
    res.json(post);
  } catch {
    res.status(500).json({ message: "Erro ao criar post." });
  }
};

export const getPosts = async (req: Request, res: Response) => {
  const posts = await prisma.post.findMany({ include: { user: true, comments: true } });
  res.json(posts);
};
