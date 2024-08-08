import { Request, Response } from "express";
import { EditTecnologyUseCase } from "./useCase";

export class EditTecnologiesController {
  constructor(private readonly editTecnologyUseCase: EditTecnologyUseCase) { }

  async handle(req: Request, res: Response) {
    try {
      const { title, deadline } = req.body;
      if (!req.params.id) {
        return res.status(400).json({
          error: 'Id not provided'
        })
      }

      const tecnologyUpdated = await this.editTecnologyUseCase.execute({
        title,
        deadline,
        id: req.params.id
      });
      
      return res.status(200).json(tecnologyUpdated);
    } catch (error: any) {
      return res.status(400).json({ error: error.message });
    }
  }
}
