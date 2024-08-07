import { EditTecnologiesController } from "./controller.js";
import { EditTecnologyUseCase } from "./useCase.js";
import { UserRepository } from "../../../implementation/UserRepository.js";

const userRepository = new UserRepository();
const editTecnologiesUseCase = new EditTecnologyUseCase(userRepository);
const editTecnologiesController = new EditTecnologiesController(editTecnologiesUseCase);

export { editTecnologiesUseCase, editTecnologiesController };
