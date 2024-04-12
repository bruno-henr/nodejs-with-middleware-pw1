import { MarkTecnologyController } from "./controller.js";
import { MarkTecnologyUseCase } from "./useCase.js";
import { UserRepository } from "../../../implementation/UserRepository.js";

const userRepository = new UserRepository();
const markTecnologyUseCase = new MarkTecnologyUseCase(userRepository);
const markTecnologyController = new MarkTecnologyController(
  markTecnologyUseCase
);

export { markTecnologyUseCase, markTecnologyController };
