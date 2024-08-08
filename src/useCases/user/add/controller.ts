import { Request, Response } from "express";
import { AddUserUseCase } from "./useCase";

export class AddUserController {

  constructor(private readonly addUserUseCase: AddUserUseCase) { }

  async handle(req: Request, res: Response) {
    try {
      const { name, username } = req.body;

      const user = await this.addUserUseCase.execute({
        name,
        username,
      });

      return res.status(201).json(user);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
