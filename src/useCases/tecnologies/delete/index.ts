import { DeleteTecnologyController } from "./controller";
import { DeleteTecnologyUseCase } from "./useCase";
import { UserRepository } from "../../../implementation/UserRepository";

const userRepository = new UserRepository();
const deleteTecnologyUseCase = new DeleteTecnologyUseCase(userRepository);
const deleteTecnologyController = new DeleteTecnologyController(
  deleteTecnologyUseCase
);

export { deleteTecnologyUseCase, deleteTecnologyController };
