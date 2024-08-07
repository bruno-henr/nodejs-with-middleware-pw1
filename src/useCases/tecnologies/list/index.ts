import { ListTecnologiesController } from "./controller.js";
import { ListTecnologiesUseCase } from "./useCase.js";
import { UserRepository } from "../../../implementation/UserRepository.js";

const userRepository = new UserRepository();
const listTecnologiesUseCase = new ListTecnologiesUseCase(userRepository);
const listTecnologiesController = new ListTecnologiesController(listTecnologiesUseCase);

export { listTecnologiesUseCase, listTecnologiesController };
