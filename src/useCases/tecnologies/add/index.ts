import { AddTecnologiesController } from "./controller.js";
import { AddTecnologiesUseCase } from "./useCase.js";
import { UserRepository } from "../../../implementation/UserRepository.js";

const userRepository = new UserRepository();
const addTecnologiesUseCase = new AddTecnologiesUseCase(userRepository);
const addTecnologiesController = new AddTecnologiesController(addTecnologiesUseCase);

export { addTecnologiesUseCase, addTecnologiesController };
