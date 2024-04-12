import { DeleteTecnologyController } from "./controller.js";
import { DeleteTecnologyUseCase } from "./useCase.js";
import { UserRepository } from "../../../implementation/UserRepository.js";

const userRepository = new UserRepository();
const deleteTecnologyUseCase = new DeleteTecnologyUseCase(userRepository);
const deleteTecnologyController = new DeleteTecnologyController(
  deleteTecnologyUseCase
);

export { deleteTecnologyUseCase, deleteTecnologyController };
