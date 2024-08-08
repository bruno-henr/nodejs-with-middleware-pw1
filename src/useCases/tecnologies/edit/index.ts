import { EditTecnologiesController } from "./controller";
import { EditTecnologyUseCase } from "./useCase";
import { UserRepository } from "../../../implementation/UserRepository";

const userRepository = new UserRepository();
const editTecnologiesUseCase = new EditTecnologyUseCase(userRepository);
const editTecnologiesController = new EditTecnologiesController(editTecnologiesUseCase);

export { editTecnologiesUseCase, editTecnologiesController };
