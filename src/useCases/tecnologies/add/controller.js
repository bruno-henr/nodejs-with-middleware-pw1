import { AddTecnologiesUseCase } from "./useCase.js";

export class AddTecnologiesController {
  addTecnologiesUseCase;
  /**
   * @param {AddTecnologiesUseCase} addTecnologiesUseCase
   */
  constructor(addTecnologiesUseCase) {
    this.addTecnologiesUseCase = addTecnologiesUseCase;
  }
  /**
   * @param {Request} req
   * @param {Response} res
   */
  handle(req, res) {
    try {
      const user = req.user;
      const { title, deadline } = req.body;
      const tecnologies = this.addTecnologiesUseCase.execute(user.id, {
        title,
        deadline,
      });
      return res.status(201).json(tecnologies);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
