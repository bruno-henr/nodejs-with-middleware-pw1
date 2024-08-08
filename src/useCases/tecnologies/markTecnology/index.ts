import { MarkTecnologyController } from "./controller";
import { MarkTecnologyUseCase } from "./useCase";
import { UserRepository } from "../../../implementation/UserRepository";

const userRepository = new UserRepository();
const markTecnologyUseCase = new MarkTecnologyUseCase(userRepository);
const markTecnologyController = new MarkTecnologyController(
  markTecnologyUseCase
);

export { markTecnologyUseCase, markTecnologyController };
