import { ListUserUseCase } from "./useCase.js";
import pkg from 'express';
const { Request, Response } = pkg;

export class ListUserController {
  listUserUseCase;
  /**
   * @param {ListUserUseCase} listUserUseCase
   */
  constructor(listUserUseCase) {
    this.listUserUseCase = listUserUseCase;
  }
  /**
   * @param {Request} req
   * @param {Response} res
   */
  handle(req, res) {
    try {
      const users =  this.listUserUseCase.execute();
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json({ error: error.message });
    }
  }
}
