import { Request, Response } from "express";
import { DeleteTecnologyUseCase } from "./useCase"

export class DeleteTecnologyController {
  constructor(private readonly deleteTecnologyUseCase: DeleteTecnologyUseCase) { }

  async handle(req: Request, res: Response) {
    try {
      const user = req.user;
      if (!req.params.id) {
        return res.status(400).json({ error: 'Id is required' });
      }
      const tecnologies = await this.deleteTecnologyUseCase.execute(user.id, req.params.id);
      return res.status(200).json(tecnologies);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}