import { AddUserUseCase } from "./useCase.js";
import pkg from 'express';
const { Request, Response } = pkg;

export class AddUserController {
  addUserUseCase;
  /**
   * @param {AddUserUseCase} addUserUseCase
   */
  constructor(addUserUseCase) {
    this.addUserUseCase = addUserUseCase;
  }
  /**
   * @param {Request} req
   * @param {Response} res
   */
  handle(req, res) {
    try {
      const { name, username } = req.body;
      
      const user =  this.addUserUseCase.execute({
        name,
        username,
      });
      return res.status(201).json(user);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
