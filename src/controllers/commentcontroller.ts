import { Request, Response } from "express";
import prisma from "../PrismaService";

export const createComment = async (req: Request, res: Response) => {
  try {
    const comment = await prisma.comment.create({ data: req.body });
    res.json(comment);
  } catch {
    res.status(500).json({ message: "Erro ao criar comentário." });
  }
};

export const getComments = async (req: Request, res: Response) => {
  const comments = await prisma.comment.findMany({ include: { post: true } });
  res.json(comments);
};
