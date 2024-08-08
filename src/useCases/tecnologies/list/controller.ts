import { Request, Response } from "express";
import { ListTecnologiesUseCase } from "./useCase";


export class ListTecnologiesController {
  constructor(private readonly listTecnologiesUseCase: ListTecnologiesUseCase) { }

  async handle(req: Request, res: Response) {
    try {
      const user = req.user;
      const tecnologies = await this.listTecnologiesUseCase.execute(user.id);
      return res.status(200).json(tecnologies);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}