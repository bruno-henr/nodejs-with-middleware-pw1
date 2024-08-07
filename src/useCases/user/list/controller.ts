import { Request, Response } from "express";
import { ListUserUseCase } from "./useCase.js";

export class ListUserController {
  constructor(private readonly listUserUseCase: ListUserUseCase) { }

  handle(req: Request, res: Response) {
    try {
      const users = this.listUserUseCase.execute();
      return res.status(200).json(users);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
