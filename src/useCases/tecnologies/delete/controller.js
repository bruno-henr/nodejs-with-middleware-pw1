import { DeleteTecnologyUseCase } from "./useCase.js";


export class DeleteTecnologyController {
    deleteTecnologyUseCase;
  /**
   * @param {DeleteTecnologyUseCase} deleteTecnologyUseCase
   */
  constructor(deleteTecnologyUseCase) {
    this.deleteTecnologyUseCase = deleteTecnologyUseCase;
  }
  /**
   * @param {Request} req
   * @param {Response} res
   */
  handle(req, res) {
    try {
      const user = req.user;
      if(!req.params.id) {
        return res.status(400).json({ error: 'Id is required' });
      }
      const tecnologies =  this.deleteTecnologyUseCase.execute(user.id, req.params.id);
      return res.status(200).json(tecnologies);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}