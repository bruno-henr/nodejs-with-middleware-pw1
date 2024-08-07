import { Request, Response } from "express";
import { AddTecnologiesUseCase } from "./useCase.js";

export class AddTecnologiesController {
  constructor(private readonly addTecnologiesUseCase: AddTecnologiesUseCase) { }
  
  handle(req: Request, res: Response) {
    try {
      const user = req.user;
      const { title, deadline } = req.body;
      const tecnologies = this.addTecnologiesUseCase.execute(user.id, {
        title,
        deadline,
      });
      return res.status(201).json(tecnologies);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
