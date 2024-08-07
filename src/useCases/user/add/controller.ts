import { Request, Response } from "express";
import { AddUserUseCase } from "./useCase.js";

export class AddUserController {
  
  constructor(private readonly addUserUseCase: AddUserUseCase) {}
  
  handle(req: Request, res: Response) {
    try {
      const { name, username } = req.body;
      
      const user =  this.addUserUseCase.execute({
        name,
        username,
      });
      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
