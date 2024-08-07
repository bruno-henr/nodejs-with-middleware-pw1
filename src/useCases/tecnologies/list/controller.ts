import { ListTecnologiesUseCase } from "./useCase.js";


export class ListTecnologiesController {
    listTecnologiesUseCase;
  /**
   * @param {ListTecnologiesUseCase} listTecnologiesUseCase
   */
  constructor(listTecnologiesUseCase) {
    this.listTecnologiesUseCase = listTecnologiesUseCase;
  }
  /**
   * @param {Request} req
   * @param {Response} res
   */
  handle(req, res) {
    try {
      const user = req.user;
      const tecnologies =  this.listTecnologiesUseCase.execute(user.id);
      return res.status(200).json(tecnologies);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}