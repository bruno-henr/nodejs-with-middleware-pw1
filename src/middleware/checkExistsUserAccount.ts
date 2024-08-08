import { NextFunction, Request, Response } from "express";
import { UserRepository } from "../implementation/UserRepository";
import { User } from "@prisma/client";

export const checkExistsUserAccount = async (req: Request, res: Response, next: NextFunction) => {
  const { username } = req.headers;
  const userRepository = new UserRepository();

  // Busca o usuário pelo nome de usuário
  const user = await userRepository.list(username as string);
  if (!user) {
    return res.status(404).json({ error: "User not exists" });
  }
  
  // Adiciona o usuário à requisição para que outras rotas possam acessá-lo
  req.user = user as User;
  next();
};
