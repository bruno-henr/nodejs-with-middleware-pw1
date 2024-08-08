import { Request, Response } from "express";
import { MarkTecnologyUseCase } from "./useCase";

export class MarkTecnologyController {
  constructor(private readonly markTecnologyUseCase: MarkTecnologyUseCase) {
  }

  async handle(req: Request, res: Response) {
    try {
      const user = req.user;
      if (!req.params.id) {
        return res.status(400).json({
          error: 'Id not provided'
        })
      }

      const tecnologyUpdated = await this.markTecnologyUseCase.execute(req.params.id);
      return res.status(200).json(tecnologyUpdated);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
