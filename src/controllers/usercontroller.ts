import { Request, Response } from "express";
import prisma from "../PrismaService";

export const createUser = async (req: Request, res: Response) => {
  try {
    const user = await prisma.user.create({ data: req.body });
    res.json(user);
  } catch (err: any) {
    if (err.code === "P2002") {
      res.status(409).json({ message: "Email já cadastrado." });
    } else {
      res.status(500).json({ message: "Erro ao criar usuário." });
    }
  }
};

export const getUsers = async (req: Request, res: Response) => {
  const users = await prisma.user.findMany({ include: { posts: true } });
  res.json(users);
};
