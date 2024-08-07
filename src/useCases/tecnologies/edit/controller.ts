import { EditTecnologyUseCase } from "./useCase.js";

export class EditTecnologiesController {
  editTecnologyUseCase;
  /**
   * @param {EditTecnologyUseCase} editTecnologyUseCase
   */
  constructor(editTecnologyUseCase) {
    this.editTecnologyUseCase = editTecnologyUseCase;
  }
  /**
   * @param {Request} req
   * @param {Response} res
   */
  handle(req, res) {
    try {
      const user = req.user;
      const { title, deadline } = req.body;
      if(!req.params.id) {
        return res.status(40).json({
          error: 'Id not provided'
        })
      }

      const tecnologyUpdated = this.editTecnologyUseCase.execute(user.id, {
        title,
        deadline,
        id: req.params.id
      });
      return res.status(200).json(tecnologyUpdated);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
