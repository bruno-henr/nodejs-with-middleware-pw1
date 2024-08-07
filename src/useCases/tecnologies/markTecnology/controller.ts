import { MarkTecnologyUseCase } from "./useCase.js";

export class MarkTecnologyController {
  markTecnologyUseCase;
  /**
   * @param {MarkTecnologyUseCase} markTecnologyUseCase
   */
  constructor(markTecnologyUseCase) {
    this.markTecnologyUseCase = markTecnologyUseCase;
  }
  /**
   * @param {Request} req
   * @param {Response} res
   */
  handle(req, res) {
    try {
      const user = req.user;
      if(!req.params.id) {
        return res.status(40).json({
          error: 'Id not provided'
        })
      }

      const tecnologyUpdated = this.markTecnologyUseCase.execute(user.id, req.params.id);
      return res.status(200).json(tecnologyUpdated);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
